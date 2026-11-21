
from datetime import datetime

# -----------------------------
# Day Features
# -----------------------------

def get_day_features(date_str):
    """
    date_str format: YYYY-MM-DD
    """

    date = datetime.strptime(date_str, "%Y-%m-%d")

    day_of_week = date.weekday()

    day_name = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ][day_of_week]

    is_weekend = 1 if day_of_week >= 5 else 0

    return {
        "year": date.year,
        "month": date.month,
        "day": date.day,
        "day_of_week": day_of_week,
        "day_name": day_name,
        "is_weekend": is_weekend
    }


# -----------------------------
# Rush Hour
# -----------------------------

def get_rush_hour(hour):

    if 7 <= hour <= 10:
        return "Morning"

    elif 17 <= hour <= 20:
        return "Evening"

    else:
        return "None"

# -----------------------------
# Season
# -----------------------------

def get_season(month):

    if month in [12, 1, 2]:
        return "Winter"

    elif month in [3, 4, 5]:
        return "Summer"

    elif month in [6, 7, 8]:
        return "Monsoon"

    else:
        return "Autumn"


# -----------------------------
# Rain
# -----------------------------

def get_rain_features(weather):

    weather = weather.lower()

    if "rain" in weather:

        return {
            "rain":1,
            "is_raining":1
        }

    return {
        "rain":0,
        "is_raining":0
    }


# -----------------------------
# Temperature Category
# -----------------------------

def get_temp_category(temp):

    if temp < 15:
        return "Cold"

    elif temp < 30:
        return "Moderate"

    else:
        return "Hot"
# -----------------------------
# Humidity Category
# -----------------------------

def get_humidity_category(h):

    if h < 40:
        return "Low"

    elif h < 70:
        return "Medium"

    else:
        return "High"


# -----------------------------
# Wind Category
# -----------------------------

def get_wind_category(w):

    if w < 5:
        return "Low"

    elif w < 15:
        return "Medium"

    else:
        return "High"

# -----------------------------
# Pressure Category
# -----------------------------

def get_pressure_category(p):

    if p < 1000:
        return "Low"

    elif p < 1015:
        return "Normal"

    else:
        return "High"

# -----------------------------
# Weather Category
# -----------------------------

def get_weather_category(weather):

    weather = weather.lower()

    if "clear" in weather:
        return "Clear"

    elif "cloud" in weather:
        return "Cloudy"

    elif "rain" in weather:
        return "Rain"

    elif "fog" in weather:
        return "Fog"

    else:
        return "Other"

# -----------------------------
# WMO Weather Code
# -----------------------------

def get_weather_code(weather):

    weather = weather.lower()

    mapping = {

        "clear":0,
        "cloud":3,

        "fog":45,

        "drizzle":55,

        "rain":63,

        "heavy rain":65,

        "thunderstorm":95

    }

    for key in mapping:

        if key in weather:
            return mapping[key]

    return 0