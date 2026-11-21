

import requests

def get_location(place):

    print(f"\nSearching location: {place}")

    url = "https://nominatim.openstreetmap.org/search"

    params = {
        "q": f"{place}, Delhi, India",
        "format": "json",
        "limit": 1
    }

    headers = {
        "User-Agent": "TrafficAI/1.0"
    }

    response = requests.get(
        url,
        params=params,
        headers=headers,
        timeout=30
    )

    data = response.json()

    print("Response:", data)

    if len(data) == 0:
        raise Exception(f"Location not found: {place}")

    return {
        "latitude": float(data[0]["lat"]),
        "longitude": float(data[0]["lon"])
    }