
import requests
def get_route(start_lat, start_lon, end_lat, end_lon):

    url = (
        f"http://router.project-osrm.org/route/v1/driving/"
        f"{start_lon},{start_lat};{end_lon},{end_lat}"
        "?overview=false"
    )
    response = requests.get(url)

    response.raise_for_status()

    data = response.json()

    if data["code"] != "Ok":
        raise Exception("Route not found")

    route = data["routes"][0]

    distance = round(route["distance"] / 1000, 1)      
    duration = round(route["duration"] / 60)           

    fuel = round(distance / 15, 1)

    # Best Route
    main_route = {
        "distance_km": distance,
        "travel_time_min": duration,
    }

    # Dummy Alternatives
    alternative_routes = [

        {
            "name": "Route A",
            "distance_km": distance,
            "travel_time_min": duration,
            "traffic": "Low",
            "fuel": fuel,
            "recommendation": "⭐ Best"
        },

        {
            "name": "Route B",
            "distance_km": round(distance * 1.08, 1),
            "travel_time_min": duration + 6,
            "traffic": "Medium",
            "fuel": round(fuel * 1.1, 1),
            "recommendation": "Good"
        },

        {
            "name": "Route C",
            "distance_km": round(distance * 1.18, 1),
            "travel_time_min": duration + 14,
            "traffic": "High",
            "fuel": round(fuel * 1.25, 1),
            "recommendation": "Avoid"
        }

    ]

    return {
        "route": main_route,
        "alternative_routes": alternative_routes
    }