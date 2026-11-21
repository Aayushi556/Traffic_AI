import { Trash2, MapPin, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function HistoryCard({ data, refresh }) {

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await api.delete(`/history/${data.id}`);
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const handleView = async () => {
    try {
      const response = await api.get(`/history/${data.id}`);

      navigate("/result", {
        state: {
          prediction: response.data,
        },
      });

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="rounded-3xl border border-[#2a2a2a] bg-[#111111] p-6">

      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <MapPin className="text-[#E8B44B]" size={20} />
            {data.source} → {data.destination}
          </h2>

          <div className="mt-3 flex flex-wrap gap-5 text-neutral-400">

            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {data.journey_date}
            </span>

            <span className="flex items-center gap-2">
              <Clock size={16} />
              {data.journey_time}
            </span>

          </div>

        </div>

        <div className="flex gap-3">

          <button
            onClick={handleView}
            className="rounded-xl bg-[#E8B44B] px-4 py-2 font-semibold text-black hover:opacity-90"
          >
            View Details
          </button>

          <button
            onClick={handleDelete}
            className="rounded-xl bg-red-600 px-4 py-2 hover:bg-red-700"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

      {/* Cards */}

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="rounded-xl bg-[#181818] p-4">
          <p className="text-sm text-neutral-400">
            Traffic
          </p>

          <h3 className="mt-2 font-bold">
            {data.congestion_level}
          </h3>
        </div>

        <div className="rounded-xl bg-[#181818] p-4">
          <p className="text-sm text-neutral-400">
            Risk
          </p>

          <h3 className="mt-2 font-bold">
            {data.risk_level}
          </h3>
        </div>

        <div className="rounded-xl bg-[#181818] p-4">
          <p className="text-sm text-neutral-400">
            Travel Score
          </p>

          <h3 className="mt-2 font-bold">
            {data.travel_score}/100
          </h3>
        </div>

        <div className="rounded-xl bg-[#181818] p-4">
          <p className="text-sm text-neutral-400">
            AI Confidence
          </p>

          <h3 className="mt-2 font-bold">
            {data.ai_confidence}%
          </h3>
        </div>

      </div>

    </div>
  );
}