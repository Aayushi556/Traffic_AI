from services.risk_service import predict_risk

features = {

    "city": "Delhi",

    "latitude": 28.5920,
    "longitude": 77.1710,

    "year": 2025,
    "month": 8,
    "day": 18,

    "event_hour": 18,

    "day_of_week": "Monday",

    "is_weekend": 0,

    "road_type": "urban",

    "lanes": 4,

    "traffic_signal": 1,

    "weather": "clear",

    "visibility": "high",

    "temperature_c": 28,

    "traffic_density": "high",

    "is_peak_hour": 1
}

risk = predict_risk(features)

print("=" * 40)
print("Risk Prediction")
print(risk)
print("=" * 40)