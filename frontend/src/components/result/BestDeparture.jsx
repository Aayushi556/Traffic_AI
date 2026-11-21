
import {
  Clock,
  TrendingDown,
  Star,
  Timer,
} from "lucide-react";
import { useLocation } from "react-router-dom";

export default function BestDeparture() {
  const { state } = useLocation();

  const departure =
    state?.prediction?.best_departure || {};

  return (
    <div className="rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">

      <div className="flex items-center justify-between">

        <div>

          <p className="uppercase tracking-[4px] text-sm text-neutral-500">
            Smart Suggestion
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Best Departure Time
          </h2>

        </div>

        <Clock
          className="text-[#E8B44B]"
          size={34}
        />

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="rounded-2xl bg-[#181818] p-5">

          <div className="flex items-center gap-2 text-[#E8B44B]">
            <Timer size={20} />
            <span>Leave After</span>
          </div>

          <h2 className="mt-3 text-3xl font-bold">
            {departure.leave_after ?? "--"}
          </h2>

        </div>

        <div className="rounded-2xl bg-[#181818] p-5">

          <div className="flex items-center gap-2 text-[#E8B44B]">
            <Clock size={20} />
            <span>Recommended Time</span>
          </div>

          <h2 className="mt-3 text-3xl font-bold">
            {departure.recommended_time ?? "--"}
          </h2>

        </div>

        <div className="rounded-2xl bg-[#181818] p-5">

          <div className="flex items-center gap-2 text-[#E8B44B]">
            <TrendingDown size={20} />
            <span>Traffic Reduction</span>
          </div>

          <h2 className="mt-3 text-3xl font-bold">
            {departure.traffic_reduction ?? 0}%
          </h2>

        </div>

        <div className="rounded-2xl bg-[#181818] p-5">

          <div className="flex items-center gap-2 text-[#E8B44B]">
            <Star size={20} />
            <span>Rating</span>
          </div>

          <h2 className="mt-3 text-3xl font-bold">
            {"★".repeat(departure.rating ?? 0)}
            {"☆".repeat(5 - (departure.rating ?? 0))}
          </h2>

        </div>

      </div>

      <div className="mt-6 rounded-2xl border border-[#E8B44B]/30 bg-[#E8B44B]/10 p-5">

        <p className="text-lg font-semibold text-[#E8B44B]">
          {departure.message ?? "No recommendation available."}
        </p>

      </div>

    </div>
  );
}