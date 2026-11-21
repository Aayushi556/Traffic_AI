import { ShieldCheck, TriangleAlert } from "lucide-react";

export default function RiskCard({ data }) {
  return (
    <div className="group rounded-2xl border border-[#232323] bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E8B44B]/40">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#181818]">
          <ShieldCheck size={20} className="text-[#E8B44B]" />
        </div>

        <span className="rounded-full bg-[#181818] px-3 py-1 text-xs text-[#E8B44B]">
          Safe
        </span>

      </div>

      {/* Title */}

      <p className="mt-6 text-sm uppercase tracking-wider text-neutral-500">
        Accident Risk
      </p>

      {/* Level */}

      <h2 className="mt-2 text-3xl font-bold text-[#E8B44B]">
        {data.risk}
      </h2>

      {/* Risk Percentage */}

      <div className="mt-6">

        <div className="flex justify-between text-sm">

          <span className="text-neutral-500">
            Risk Score
          </span>

          <span className="font-medium">
            {data.riskScore}
          </span>

        </div>

        {/* Progress */}

        <div className="mt-3 h-2 rounded-full bg-[#1b1b1b]">

          <div
            className="h-2 rounded-full bg-[#E8B44B]"
            style={{ width: "14%" }}
          ></div>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center gap-2 text-sm text-neutral-400">

        <TriangleAlert size={16} className="text-[#E8B44B]" />

        <span>
          Low accident probability
        </span>

      </div>

    </div>
  );
}