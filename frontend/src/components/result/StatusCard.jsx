import {
  CalendarDays,
  Sunrise,
  Gauge,
  Cpu,
  Activity,
  CheckCircle2,
} from "lucide-react";

export default function StatusCard({ data }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#232323] bg-[#111111] p-6">

      {/* Gold Glow */}
      <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[#E8B44B]/10 blur-[120px]" />

      {/* Header */}
      <div className="relative flex items-center justify-between">

        <div>
          <p className="text-xs uppercase tracking-[3px] text-neutral-500">
            Prediction Status
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Journey Insights
          </h2>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#181818]">
          <Activity className="text-[#E8B44B]" />
        </div>

      </div>

      {/* Grid */}

      <div className="relative mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-xl border border-[#232323] bg-[#181818] p-4">
          <CalendarDays className="mb-3 text-[#E8B44B]" size={18} />
          <p className="text-xs text-neutral-500">Day</p>
          <h3 className="mt-1 font-semibold">{data.day}</h3>
        </div>

        <div className="rounded-xl border border-[#232323] bg-[#181818] p-4">
          <Sunrise className="mb-3 text-[#E8B44B]" size={18} />
          <p className="text-xs text-neutral-500">Season</p>
          <h3 className="mt-1 font-semibold">{data.season}</h3>
        </div>

        <div className="rounded-xl border border-[#232323] bg-[#181818] p-4">
          <Gauge className="mb-3 text-[#E8B44B]" size={18} />
          <p className="text-xs text-neutral-500">Rush Hour</p>
          <h3 className="mt-1 font-semibold">{data.rush}</h3>
        </div>

        <div className="rounded-xl border border-[#232323] bg-[#181818] p-4">
          <Cpu className="mb-3 text-[#E8B44B]" size={18} />
          <p className="text-xs text-neutral-500">AI Confidence</p>
          <h3 className="mt-1 font-semibold text-[#E8B44B]">
            {data.aiConfidence}%
          </h3>
        </div>

      </div>

      {/* Footer */}

      <div className="relative mt-8 rounded-xl border border-[#E8B44B]/20 bg-[#181818] p-4">

        <div className="flex items-center gap-3">

          <CheckCircle2 className="text-[#E8B44B]" size={20} />

          <div>
           <p className="text-sm text-neutral-400">
            {data.statusMessage}
          </p>

            <p className="text-sm text-neutral-400">
              AI analyzed traffic, weather and historical data successfully.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}