from services.congestion_service import predict_congestion

features = {

    "speed_limit": 60,
    "road_class": 1,
    "road_length": 2.4,

    "start_lat": 28.5920,
    "start_lon": 77.1710,

    "mid_lat": 28.6000,
    "mid_lon": 77.1800,

    "end_lat": 28.6139,
    "end_lon": 77.2090,

    "time_set": 18,

    "temperature": 28,
    "humidity": 60,
    "precipitation": 0,

    "rain": 0,

    "weather_code": 0,

    "wind_speed": 6,

    "pressure": 1008,

    "year": 2025,
    "month": 8,
    "day": 18,

    "day_of_week": 0,
    "day_name": 0,
    "is_weekend": 0,

    "rush_hour": 2,

    "season": 2,

    "is_holiday": 0,

    "weather_category": 0,

    "is_raining": 0,

    "temp_category": 1,

    "humidity_category": 1,

    "wind_category": 1,

    "pressure_category": 1

}

prediction = predict_congestion(features)

print("="*40)
print("Congestion Prediction")
print(prediction)
print("="*40)