
import DashboardNavbar from "../components/DashboardNavbar";
import JourneyCard from "../components/result/JourneyCard";
import TrafficCard from "../components/result/TrafficCard";
import RiskCard from "../components/result/RiskCard";
import WeatherCard from "../components/result/WeatherCard";
import Recommendation from "../components/result/Recommendation";
import StatusCard from "../components/result/StatusCard";
import RouteMap from "../components/result/RouteMap";
import TravelScore from "../components/result/TravelScore";
import TrafficTrend from "../components/result/TrafficTrend";
import AlternativeRoutes from "../components/result/AlternativeRoutes";

import BestDeparture from "../components/result/BestDeparture";
import { useLocation } from "react-router-dom";

export default function Result() {
  const location = useLocation();

  const input = location.state?.input || {};
  const prediction = location.state?.prediction || {};
  console.log("Prediction:", prediction);
const result = {
  source: input.source || prediction.source || "India Gate",
  destination: input.destination || prediction.destination || "Delhi",

  date: input.date || "--",
  time: input.time || "--",

  distance: prediction.route?.distance_km
    ? `${prediction.route.distance_km} km`
    : "--",

  eta: prediction.route?.travel_time_min
    ? `${prediction.route.travel_time_min} min`
    : "--",

  congestion: prediction.prediction?.congestion_level || "--",

  congestionScore: prediction.prediction?.congestion_score || "--",

  risk: prediction.risk?.level || "--",

  riskScore: prediction.risk?.score || "--",

  weather: prediction.weather?.condition || "--",

  temperature: prediction.weather?.temperature
    ? `${prediction.weather.temperature}°C`
    : "--",

  humidity: prediction.weather?.humidity
    ? `${prediction.weather.humidity}%`
    : "--",

  wind: prediction.weather?.wind_speed
    ? `${prediction.weather.wind_speed} km/h`
    : "--",

  day: prediction.details?.day || "--",

  season: prediction.details?.season || "--",

  rush: prediction.details?.rush_hour || "--",

  recommendation:
    prediction.prediction?.message || "No recommendation available.",

  riskMessage:
    prediction.risk?.message || "",
  weatherMessage: `${prediction.weather?.condition || "--"} • ${prediction.weather?.temperature || "--"}°C`,
  sourceLocation: prediction.source_location,

  destinationLocation: prediction.destination_location,
  avgSpeed:
  prediction.route?.distance_km && prediction.route?.travel_time_min
    ? Math.round(
        prediction.route.distance_km /
        (prediction.route.travel_time_min / 60)
      ) + " km/h"
    : "--",

fuelEstimate:
  prediction.route?.distance_km
    ? (prediction.route.distance_km / 18).toFixed(1) + " L"
    : "--",

co2Saved:
  prediction.route?.distance_km
    ? (prediction.route.distance_km * 0.12).toFixed(1) + " kg"
    : "--",

trafficDensity:
  prediction.prediction?.congestion_level || "--",
  trafficTrend: prediction.traffic_trend || [],

  alternativeRoutes: prediction.alternative_routes || [],

  bestDeparture: prediction.best_departure || {},

aiInsight:
  prediction.ai_insight ||
  (
    prediction.prediction?.congestion_level === "Low"
      ? `Traffic is smooth because it is ${prediction.details?.rush_hour?.toLowerCase() || "non-rush hours"}, weather is ${prediction.weather?.condition?.toLowerCase()}, and accident risk is ${prediction.risk?.level?.toLowerCase()}.`
      : prediction.prediction?.congestion_level === "Medium"
      ? `Moderate traffic is expected due to ${prediction.details?.rush_hour?.toLowerCase() || "traffic conditions"}. Travel with a small buffer of extra time.`
      : `Heavy congestion is expected because of ${prediction.details?.rush_hour?.toLowerCase() || "peak traffic"} and current road conditions. Consider leaving later or using the recommended route.`
  ),
  finalRecommendation:
  prediction.final_recommendation ||
  (
    prediction.prediction?.congestion_level === "Low"
      ? "Traffic is smooth and weather conditions are favorable. This route is safe for travel."
      : prediction.prediction?.congestion_level === "Medium"
      ? "Moderate congestion is expected. Consider leaving a few minutes early."
      : "Heavy congestion detected. Consider delaying your journey or taking the recommended alternative route."
  ),
  travelScore: prediction.travel_score || 0,
  aiConfidence: prediction.ai_confidence || "--",
  statusMessage:
  prediction.prediction?.message || "Prediction completed successfully.",
};


  console.log("Result:", result);
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <DashboardNavbar />

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        {/* Heading */}

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Traffic Intelligence Report
            </h1>

            <p className="mt-1 text-neutral-400">
              AI Powered Traffic Prediction Dashboard
            </p>
          </div>

          <span className="rounded-full border border-[#2a2a2a] bg-[#111111] px-4 py-2 text-sm">
            ● LIVE
          </span>
        </div>

        {/* Journey */}

        <div className="mt-8">
          <JourneyCard data={result} />
        </div>
        {/* Traffic Cards */}

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <TrafficCard data={result} />

          <RiskCard data={result} />

          <WeatherCard data={result} />
        </div>

        {/* Bottom */}

        {/* Recommendation + AI Travel Score */}

        <div className="mt-6 grid gap-5 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <Recommendation data={result} />
          </div>

          <TravelScore data={result} />

        </div>

        {/* Status */}

        <div className="mt-6">
          <StatusCard data={result} />
        </div>
        {/* Traffic Trend */}

          <div className="mt-6">
              <TrafficTrend data={result} />
          </div>

        <div className="mt-6">
           <AlternativeRoutes data={result} />
        </div>
        

        <div className="mt-6">
          <BestDeparture data={result} />
      </div>
        {/* Map */}
        <div className="mt-6">
          <RouteMap data={result} />
        </div>
      </main>
    </div>
  );
}