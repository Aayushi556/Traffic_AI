
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from datetime import datetime, timedelta
from services.location_service import get_location
from services.weather_service import get_weather
from services.route_service import get_route
from services.congestion_service import predict_congestion
from services.risk_service import predict_risk
from utils.risk_feature_preparation import prepare_risk_features
from services.save_prediction import save_prediction
from database.database import (
    save_prediction,
    get_prediction_by_id,
    get_all_predictions,
    delete_prediction,
    delete_all_predictions
)
import json
from auth.security import get_current_user
# from services.history_service import (
#     get_all_predictions,
#     delete_prediction,
#     delete_all_predictions
# )
from utils.feature_engineering import  (
    get_day_features,
    get_rush_hour,
    get_season,
    get_weather_category,
    get_weather_code,
    get_rain_features,
    get_temp_category,
    get_humidity_category,
    get_wind_category,
    get_pressure_category
)

from utils.mappings import (
    DAY_MAP,
    RUSH_HOUR_MAP,
    SEASON_MAP,
    WEATHER_CATEGORY_MAP,
    TEMP_CATEGORY_MAP,
    HUMIDITY_CATEGORY_MAP,
    WIND_CATEGORY_MAP,
    PRESSURE_CATEGORY_MAP
)
router = APIRouter()
class PredictionRequest(BaseModel):
    source: str
    destination: str
    date: str
    time: str
@router.post("/predict")
def predict(
    request: PredictionRequest,
    current_user=Depends(get_current_user)
):
        print(current_user)

    # try:
        # ==========================
        # STEP 1 : LOCATION
        # ==========================

        source_location = get_location(request.source)
        destination_location = get_location(request.destination)

        start_lat = source_location["latitude"]
        start_lon = source_location["longitude"]

        end_lat = destination_location["latitude"]
        end_lon = destination_location["longitude"]


        # ==========================
        # STEP 2 : ROUTE
        # ==========================

        route_data = get_route(
        start_lat,
        start_lon,
            end_lat,
            end_lon
        )
        route = route_data["route"]
        alternative_routes = route_data["alternative_routes"]
        road_length = route["distance_km"]
        travel_time = route["travel_time_min"]
        # ==========================
        # STEP 3 : WEATHER
        # ==========================

        weather = get_weather(end_lat, end_lon)
        # ==========================
        # STEP 4 : DATE FEATURES
        # ==========================

        date_features = get_day_features(request.date)

        hour = int(request.time.split(":")[0])

        rush_hour = get_rush_hour(hour)

        season = get_season(date_features["month"])
        # ==========================
        # STEP 5 : FEATURE ENGINEERING
        # ==========================

        weather_text = weather["weather"]

        rain_features = get_rain_features(weather_text)

        weather_category = get_weather_category(weather_text)

        weather_code = weather["weather_code"]

        temp_category = get_temp_category(weather["temperature"])

        humidity_category = get_humidity_category(weather["humidity"])

        wind_category = get_wind_category(weather["wind_speed"])

        pressure_category = get_pressure_category(weather["pressure"])
        season_name = season
        rush_hour_name = rush_hour
        
        # ==========================
        # STEP 6 : ENCODE FEATURES
        # ==========================

        day_name_encoded = DAY_MAP[date_features["day_name"]]

        rush_hour_encoded = RUSH_HOUR_MAP[rush_hour_name]

        season_encoded = SEASON_MAP[season_name]

        weather_category_encoded = WEATHER_CATEGORY_MAP[weather_category]

        temp_category_encoded = TEMP_CATEGORY_MAP[temp_category]

        humidity_category_encoded = HUMIDITY_CATEGORY_MAP[humidity_category]

        wind_category_encoded = WIND_CATEGORY_MAP[wind_category]

        pressure_category_encoded = PRESSURE_CATEGORY_MAP[pressure_category]

        # ==========================
        # STEP 7 : CONGESTION FEATURES
        # ==========================

        congestion_features = {

            "speed_limit": 60,
            "road_class": 2,
            "road_length": road_length,

            "start_lat": start_lat,
            "start_lon": start_lon,

            "mid_lat": (start_lat + end_lat) / 2,
            "mid_lon": (start_lon + end_lon) / 2,

            "end_lat": end_lat,
            "end_lon": end_lon,

            "time_set": hour,

            "temperature": weather["temperature"],
            "humidity": weather["humidity"],
            "precipitation": weather["precipitation"],

            "rain": rain_features["rain"],

            "weather_code": weather_code,

            "wind_speed": weather["wind_speed"],

            "pressure": weather["pressure"],

            "year": date_features["year"],
            "month": date_features["month"],
            "day": date_features["day"],

            "day_of_week": date_features["day_of_week"],

            "day_name": day_name_encoded,

            "is_weekend": date_features["is_weekend"],

            "rush_hour": rush_hour_encoded,

            "season": season_encoded,

            "is_holiday": 0,

            "weather_category": weather_category_encoded,

            "is_raining": rain_features["is_raining"],

            "temp_category": temp_category_encoded,

            "humidity_category": humidity_category_encoded,

            "wind_category": wind_category_encoded,

            "pressure_category": pressure_category_encoded
        }
        # ==========================
        # STEP 8 : CONGESTION PREDICTION
        # ==========================

        congestion = predict_congestion(congestion_features)
        
        # ==========================
        # STEP 9 : CONGESTION LABEL
        # ==========================

        if congestion < 200:
            congestion_level = "Low"

        elif congestion < 400:
            congestion_level = "Medium"

        elif congestion < 600:
            congestion_level = "High"

        else:
            congestion_level = "Very High"

        # ==========================
         # STEP 9 : RISK FEATURES
        # ==========================
        risk_features = prepare_risk_features(

            destination=request.destination,

            latitude=end_lat,
            longitude=end_lon,

            year=date_features["year"],
            month=date_features["month"],
            day=date_features["day"],

            event_hour=hour,

            is_weekend=date_features["is_weekend"],

            weather_text=weather_text,

            congestion_level=congestion_level,

            temperature=weather["temperature"],

            day_name=date_features["day_name"],

            rush_hour=rush_hour

            )
         
        risk_prediction = predict_risk(risk_features)
        risk_percentage = round(risk_prediction * 100, 1)
        # ==========================
        # STEP 10 : RISK LEVEL
        # ==========================

        if risk_prediction < 0.33:
            risk_level = "Low"

        elif risk_prediction < 0.66:
            risk_level = "Medium"

        else:
            risk_level = "High"

        if risk_level == "Low":
            risk_message = "Low accident risk. Safe to travel."

        elif risk_level == "Medium":
            risk_message = "Moderate accident risk. Drive carefully."

        else:
            risk_message = "High accident risk. Travel with extra caution."
        # ==========================
        # STEP 10 : MESSAGE
        # ==========================

        if congestion_level == "Low":
            message = "Traffic is smooth. You can travel without significant delays."

        elif congestion_level == "Medium":
            message = "Moderate traffic expected. Minor delays are possible."

        elif congestion_level == "High":
            message = "Heavy traffic expected. Consider leaving early."

        else:
            message = "Severe congestion expected. Avoid this route if possible."
        # ==========================
        # STEP 10.5 : TRAVEL SCORE
        # ==========================

        travel_score = 100

        # Congestion effect
        if congestion_level == "Medium":
            travel_score -= 15

        elif congestion_level == "High":
            travel_score -= 30

        elif congestion_level == "Very High":
            travel_score -= 45

        # Risk effect
        if risk_level == "Medium":
            travel_score -= 10

        elif risk_level == "High":
            travel_score -= 20

        # Weather effect
        if weather_text in ["Rain", "Heavy Rain", "Rain Showers"]:
            travel_score -= 8

        elif weather_text in ["Thunderstorm"]:
            travel_score -= 15

        elif weather_text in ["Fog"]:
            travel_score -= 12

        travel_score = max(0, min(100, travel_score))

        # AI Confidence
        ai_confidence = round(
            max(
                80,
                min(
                    99,
                    99
                    - (100 - travel_score) * 0.15
                )
            ),
            1,
        )



         # ==========================
        # STEP 11 : BEST DEPARTURE
        # ==========================
        now = datetime.now()
        if congestion_level == "Low":

            leave_after = "Now"
            traffic_reduction = 0
     
            recommended_time = now.strftime("%H:%M")
            rating = 5
        elif congestion_level == "Medium":

            leave_after = "30 min"
            traffic_reduction = 22

            recommended_time = (
                now + timedelta(minutes=30)
            ).strftime("%H:%M")
            rating = 4

        elif congestion_level == "High":

            leave_after = "45 min"
            traffic_reduction = 35

            
            recommended_time = (
                now + timedelta(minutes=45)
            ).strftime("%H:%M")



            rating = 3

        else:

            leave_after = "60 min"
            traffic_reduction = 50

           
            recommended_time = (
                now + timedelta(minutes=60)
            ).strftime("%H:%M")
            rating = 2
        response = {

            "source": request.source,
            "destination": request.destination,

            "source_location": source_location,
            "destination_location": destination_location,

            "route": {
                "distance_km": round(road_length, 2),
                "travel_time_min": round(travel_time, 2)
            },

            "alternative_routes": alternative_routes,

            "weather": {
                "temperature": weather["temperature"],
                "humidity": weather["humidity"],
                "wind_speed": weather["wind_speed"],
                "pressure": weather["pressure"],
                "precipitation": weather["precipitation"],
                "condition": weather_text
            },

            "details": {
                "day": date_features["day_name"],
                "season": season_name,
                "rush_hour": rush_hour_name,
                "temperature_category": temp_category,
                "humidity_category": humidity_category,
                "wind_category": wind_category,
                "pressure_category": pressure_category
            },

            "prediction": {
                "congestion_score": round(congestion, 2),
                "congestion_level": congestion_level,
                "message": message
            },

            "travel_score": travel_score,
            "ai_confidence": ai_confidence,

            "risk": {
                "score": f"{risk_percentage}%",
                "level": risk_level,
                "message": risk_message
            },

            "best_departure": {
                "recommended_time": recommended_time,
                "leave_after": leave_after,
                "traffic_reduction": traffic_reduction,
                "rating": rating,
                "message": f"Traffic may reduce by {traffic_reduction}% if you leave after {leave_after}."
            },

            "traffic_trend": [
                {
                    "time": (now - timedelta(hours=3)).strftime("%I %p"),
                    "traffic": max(0, round(congestion * 0.45))
                },
                {
                    "time": (now - timedelta(hours=2)).strftime("%I %p"),
                    "traffic": max(0, round(congestion * 0.60))
                },
                {
                    "time": (now - timedelta(hours=1)).strftime("%I %p"),
                    "traffic": max(0, round(congestion * 0.80))
                },
                {
                    "time": now.strftime("%I %p"),
                    "traffic": round(congestion)
                },
                {
                    "time": (now + timedelta(hours=1)).strftime("%I %p"),
                    "traffic": max(0, round(congestion * 0.85))
                },
                {
                    "time": (now + timedelta(hours=2)).strftime("%I %p"),
                    "traffic": max(0, round(congestion * 0.70))
                },
                {
                    "time": (now + timedelta(hours=3)).strftime("%I %p"),
                    "traffic": max(0, round(congestion * 0.50))
                }
            ]
        }

        save_prediction(
            current_user["user_id"],
            {

        "source": request.source,
        "destination": request.destination,
        "journey_date": request.date,
        "journey_time": request.time,
        "distance": road_length,
        "travel_time": travel_time,
        "weather": weather_text,
        "temperature": weather["temperature"],
        "humidity": weather["humidity"],
        "congestion_score": round(congestion, 2),
        "congestion_level": congestion_level,
        "risk_score": f"{risk_percentage}%",
        "risk_level": risk_level,
        "travel_score": travel_score,
        "ai_confidence": ai_confidence,
        "prediction_json": json.dumps(response)

    }
)
        return response
@router.get("/history")
def history(
    current_user=Depends(get_current_user)
):

    predictions = get_all_predictions(
    current_user["user_id"]
)

    total = len(predictions)

    if total == 0:
        return {
            "history": [],
            "stats": {
                "total_predictions": 0,
                "average_score": 0,
                "average_confidence": 0,
                "high_risk": 0,
            }
        }

    average_score = round(
        sum(p["travel_score"] for p in predictions) / total
    )

    average_confidence = round(
        sum(p["ai_confidence"] for p in predictions) / total,
        1
    )

    high_risk = len(
        [p for p in predictions if p["risk_level"] == "High"]
    )

    return {
        "history": predictions,
        "stats": {
            "total_predictions": total,
            "average_score": average_score,
            "average_confidence": average_confidence,
            "high_risk": high_risk,
        }
    }

@router.delete("/history/{prediction_id}")
def delete_history(
    prediction_id: int,
    current_user=Depends(get_current_user)
):

    delete_prediction(
        prediction_id,
        current_user["user_id"]
    )

    return {
        "message": "Prediction deleted successfully"
    }


@router.delete("/history")
def clear_history(
    current_user=Depends(get_current_user)
):

    delete_all_predictions(
        current_user["user_id"]
    )

    return {
        "message": "All prediction history deleted successfully"
    }
        

@router.get("/history/{prediction_id}")
def get_prediction(
    prediction_id: int,
    current_user=Depends(get_current_user)
):

    prediction = get_prediction_by_id(
        prediction_id,
        current_user["user_id"]
    )

    if prediction is None:
        return {
            "error": "Prediction not found"
        }

    return prediction


    # except Exception as e:
    #     import traceback
    #     traceback.print_exc()

    #     return {
    #         "error": str(e)
    #     }


    