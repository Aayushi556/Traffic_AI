import { Car, TrendingUp } from "lucide-react";

export default function TrafficCard({ data }) {
  return (
    <div className="group rounded-2xl border border-[#232323] bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E8B44B]/40">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#181818]">
          <Car size={20} className="text-[#E8B44B]" />
        </div>

        <span className="rounded-full bg-[#181818] px-3 py-1 text-xs text-[#E8B44B]">
          Live
        </span>

      </div>

      {/* Title */}

      <p className="mt-6 text-sm uppercase tracking-wider text-neutral-500">
        Traffic Congestion
      </p>

      {/* Level */}

      <h2 className="mt-2 text-3xl font-bold text-[#E8B44B]">
        {data.congestion}
      </h2>

      {/* Score */}

      <div className="mt-6">

        <div className="flex justify-between text-sm">

          <span className="text-neutral-500">
            Congestion Score
          </span>

          <span className="font-medium">
            {data.congestionScore}
          </span>

        </div>

        {/* Progress */}

        <div className="mt-3 h-2 rounded-full bg-[#1b1b1b]">

          <div
            className="h-2 rounded-full bg-[#E8B44B]"
            style={{ width: "35%" }}
          ></div>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center gap-2 text-sm text-neutral-400">

        <TrendingUp size={16} className="text-[#E8B44B]" />

        <span>
          Smooth traffic flow detected
        </span>

      </div>

    </div>
  );
}