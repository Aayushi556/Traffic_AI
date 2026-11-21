import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import DashboardNavbar from "../components/DashboardNavbar";
import {
  MapPin,
  Navigation,
  Calendar,
  Clock3,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Prediction() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("1");
  console.log("2");

  try {
    console.log("3");

    const response = await api.post("/predict", formData);

    
    console.log(JSON.stringify(response.data, null, 2));
    console.log("Traffic Trend:", response.data.traffic_trend);
    console.log("Alternative:", response.data.alternative_routes);
    console.log("Best:", response.data.best_departure);
    navigate("/loading", {
      state: {
        input: formData,
        prediction: response.data,
      },
    });
  } catch (error) {
    console.log("5");
    console.error(error);
  }
};
  return (
    <div className="min-h-screen bg-[#090909] text-white">
        <DashboardNavbar />
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Heading */}

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#E8B44B]/30 bg-[#111111] px-5 py-2 text-[#E8B44B]">
            <Sparkles size={18} />
            AI Prediction
          </div>

          <h1 className="mt-8 text-5xl font-bold">
            Predict Your Journey
          </h1>

          <p className="mt-5 text-neutral-400 max-w-2xl mx-auto">
            Enter your travel details to predict traffic congestion,
            accident risk and estimated travel time using AI.
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mt-16 rounded-[30px] border border-[#2a2a2a] bg-[#111111] p-10"
        >

          <div className="grid md:grid-cols-2 gap-8">

            {/* Source */}

            <div>

              <label className="mb-3 flex items-center gap-2 text-[#E8B44B]">
                <MapPin size={18} />
                Source
              </label>

              <div className="relative">

                <MapPin
                  size={18}
                  className="absolute left-5 top-5 text-neutral-500"
                />

                <input
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  placeholder="Enter Source"
                  className="w-full rounded-2xl border border-[#2a2a2a] bg-[#181818] py-4 pl-14 pr-5 outline-none focus:border-[#E8B44B]"
                />

              </div>

            </div>

            {/* Destination */}

            <div>

              <label className="mb-3 flex items-center gap-2 text-[#E8B44B]">
                <Navigation size={18} />
                Destination
              </label>

              <div className="relative">

                <Navigation
                  size={18}
                  className="absolute left-5 top-5 text-neutral-500"
                />

                <input
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Enter Destination"
                  className="w-full rounded-2xl border border-[#2a2a2a] bg-[#181818] py-4 pl-14 pr-5 outline-none focus:border-[#E8B44B]"
                />

              </div>

            </div>

            {/* Date */}

            <div>

              <label className="mb-3 flex items-center gap-2 text-[#E8B44B]">
                <Calendar size={18} />
                Date
              </label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#2a2a2a] bg-[#181818] p-4 outline-none focus:border-[#E8B44B]"
              />

            </div>

            {/* Time */}

            <div>

              <label className="mb-3 flex items-center gap-2 text-[#E8B44B]">
                <Clock3 size={18} />
                Time
              </label>

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#2a2a2a] bg-[#181818] p-4 outline-none focus:border-[#E8B44B]"
              />

            </div>

          </div>

          {/* Note */}

          <div className="mt-10 rounded-2xl border border-[#E8B44B]/20 bg-[#181818] p-5 text-neutral-400">
            Weather conditions, route distance and estimated travel time
            will be fetched automatically after prediction.
          </div>

          {/* Button */}

          <button
            type="submit"
            className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#E8B44B] py-4 text-lg font-semibold text-black transition hover:scale-[1.02]"
          >
            Predict Traffic
            <ArrowRight size={20} />
          </button>

        </form>

      </div>

    </div>
  );
}

