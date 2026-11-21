# =====================================
# Weather Mapping
# =====================================

WEATHER_MAP = {
    "Clear": "clear",
    "Cloudy": "clear",
    "Rain": "rain",
    "Fog": "fog",
    "Drizzle": "rain",
    "Thunderstorm": "rain"
}


# =====================================
# Road Type Mapping
# =====================================

ROAD_TYPE_MAP = {
    "Urban": "urban",
    "Rural": "rural",
    "Highway": "highway"
}


# =====================================
# Visibility Mapping
# =====================================

def get_visibility(weather_text):

    weather = weather_text.lower()

    if "fog" in weather:
        return "low"

    elif "rain" in weather:
        return "medium"

    else:
        return "high"


# =====================================
# Traffic Density Mapping
# =====================================

def get_traffic_density(congestion_level):

    congestion_level = congestion_level.lower()

    if congestion_level == "very high":
        return "high"

    return congestion_level


# =====================================
# City Mapping
# =====================================

def get_city(city):

    city = city.lower().strip()

    if (
        "delhi" in city or
        "gurgaon" in city or
        "gurugram" in city or
        "noida" in city or
        "greater noida" in city or
        "ghaziabad" in city or
        "faridabad" in city
    ):
        return "Delhi"

    # Default bhi Delhi hi return karega
    return "Delhi"


# =====================================
# Main Function
# =====================================

def prepare_risk_features(
    destination,
    latitude,
    longitude,
    year,
    month,
    day,
    event_hour,
    is_weekend,
    weather_text,
    congestion_level,
    temperature,
    day_name,
    rush_hour
):

    return {

    "city": get_city(destination),

    "latitude": latitude,

    "longitude": longitude,

    "year": year,

    "month": month,

    "day": day,

    "event_hour": event_hour,

    "day_of_week": day_name,

    "is_weekend": is_weekend,

    "road_type": "urban",

    "lanes": 4,

    "traffic_signal": 1,

    "weather": WEATHER_MAP.get(weather_text, "clear"),

    "visibility": get_visibility(weather_text),

    "temperature_c": temperature,

    "traffic_density": get_traffic_density(congestion_level),

    "is_peak_hour": 1 if rush_hour == "Rush Hour" else 0
}