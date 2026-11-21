
import requests

# ==========================================
# Weather Code Mapping (Open-Meteo)
# ==========================================

WEATHER_CODES = {

    0: "Clear",

    1: "Mainly Clear",

    2: "Partly Cloudy",

    3: "Cloudy",

    45: "Fog",
    48: "Fog",

    51: "Drizzle",
    53: "Drizzle",
    55: "Drizzle",

    61: "Rain",
    63: "Rain",
    65: "Heavy Rain",

    71: "Snow",
    73: "Snow",
    75: "Snow",

    80: "Rain Showers",
    81: "Rain Showers",
    82: "Heavy Rain Showers",

    95: "Thunderstorm",
    96: "Thunderstorm",
    99: "Thunderstorm"
}


# ==========================================
# Get Weather
# ==========================================

def get_weather(latitude, longitude):

    url = (
        "https://api.open-meteo.com/v1/forecast"
        f"?latitude={latitude}"
        f"&longitude={longitude}"
        "&current="
        "temperature_2m,"
        "relative_humidity_2m,"
        "precipitation,"
        "weather_code,"
        "wind_speed_10m,"
        "surface_pressure"
    )

    response = requests.get(url)

    response.raise_for_status()

    current = response.json()["current"]

    weather_code = current["weather_code"]

    weather_text = WEATHER_CODES.get(weather_code, "Other")

    return {

        "temperature": current["temperature_2m"],

        "humidity": current["relative_humidity_2m"],

        "precipitation": current["precipitation"],

        "weather_code": weather_code,

        "weather": weather_text,

        "wind_speed": current["wind_speed_10m"],

        "pressure": current["surface_pressure"]

    }







