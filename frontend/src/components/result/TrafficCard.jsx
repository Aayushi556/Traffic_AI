import {
  Car,
  Activity,
  TrendingUp,
  CircleGauge,
} from "lucide-react";

export default function TrafficCard({ data }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#232323] bg-[#111111] p-6">

      {/* Gold Glow */}
      <div className="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-[#E8B44B]/10 blur-[120px]" />

      {/* Header */}

      <div className="relative flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-[3px] text-neutral-500">
            Live Traffic
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Congestion Status
          </h2>

        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#181818]">

          <Car className="text-[#E8B44B]" />

        </div>

      </div>

      {/* Main Status */}

      <div className="relative mt-8 flex items-end justify-between">

        <div>

          <p className="text-sm text-neutral-500">
            Current Level
          </p>

          <h1 className="mt-2 text-5xl font-black text-[#E8B44B]">
            {data.congestion}
          </h1>

        </div>

        <div className="rounded-full border border-[#E8B44B]/30 bg-[#181818] px-4 py-2 text-[#E8B44B]">
          Live
        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-sm">

          <span className="text-neutral-500">
            Congestion Score
          </span>

          <span className="font-semibold text-white">
            {data.congestionScore}
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-[#1b1b1b]">

          <div
            className="h-full rounded-full bg-gradient-to-r from-[#E8B44B] to-[#f8d47b]"
            // style={{ width: "35%" }}
            style={{
              width: `${Math.min(data.congestionScore / 5, 100)}%`,
            }}
          />

        </div>

      </div>

      {/* Bottom Cards */}

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-xl border border-[#232323] bg-[#181818] p-4">

          <Activity
            className="mb-3 text-[#E8B44B]"
            size={18}
          />

          <p className="text-xs text-neutral-500">
            Traffic Flow
          </p>

          <h3
            className={`mt-2 font-semibold ${
              data.congestion === "Low"
                ? "text-green-400"
                : data.congestion === "Medium"
                ? "text-yellow-400"
                : "text-red-400"
            }`}
          >
            {data.congestion === "Low"
              ? "Smooth"
              : data.congestion === "Medium"
              ? "Moderate"
              : "Heavy"}
          </h3>

        </div>

        <div className="rounded-xl border border-[#232323] bg-[#181818] p-4">

          <CircleGauge
            className="mb-3 text-[#E8B44B]"
            size={18}
          />

          <p className="text-xs text-neutral-500">
            Average Speed
          </p>

          <h3 className="mt-2 font-semibold">
           {data.avgSpeed}
          </h3>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center gap-3 rounded-xl border border-[#232323] bg-[#181818] p-4">

        <TrendingUp className="text-[#E8B44B]" />

        <div>

          <h4 className="font-semibold">
            AI Insight
          </h4>

          <p className="text-sm text-neutral-400">
            {data.aiInsight}
          </p>

        </div>

      </div>

    </div>
  );
}