
import { BrainCircuit, Car, ShieldCheck, CloudSun } from "lucide-react";

export default function Recommendation({ data }) {
  return (
    <div className="rounded-2xl border border-[#232323] bg-[#111111] p-6">

      <div className="flex items-center gap-3 mb-6">
        <BrainCircuit className="text-[#E8B44B]" />
        <h2 className="text-xl font-bold">
          AI Decision Center
        </h2>
      </div>

      <div className="space-y-5">

        {/* Traffic */}

        <div className="rounded-xl bg-[#181818] p-4">
          <div className="flex items-center gap-2 text-[#E8B44B] mb-2">
            <Car size={18} />
            <span className="font-semibold">Traffic Analysis</span>
          </div>

          <p className="text-neutral-300 text-sm leading-7">
            {data.recommendation}
          </p>
        </div>

        {/* Risk */}

        <div className="rounded-xl bg-[#181818] p-4">
          <div className="flex items-center gap-2 text-[#E8B44B] mb-2">
            <ShieldCheck size={18} />
            <span className="font-semibold">Safety Analysis</span>
          </div>

          <p className="text-neutral-300 text-sm leading-7">
            {data.riskMessage}
          </p>
        </div>

        {/* Weather */}

        <div className="rounded-xl bg-[#181818] p-4">
          <div className="flex items-center gap-2 text-[#E8B44B] mb-2">
            <CloudSun size={18} />
            <span className="font-semibold">Weather Analysis</span>
          </div>

          <p className="text-neutral-300 text-sm">
            <span className="font-medium">
              {data.weather}
            </span>
          </p>

          <div className="mt-3 grid grid-cols-3 gap-3 text-center">

            <div>
              <p className="text-xs text-neutral-500">
                Temp
              </p>

              <h4 className="font-semibold">
                {data.temperature}
              </h4>
            </div>

            <div>
              <p className="text-xs text-neutral-500">
                Humidity
              </p>

              <h4 className="font-semibold">
                {data.humidity}
              </h4>
            </div>

            <div>
              <p className="text-xs text-neutral-500">
                Wind
              </p>

              <h4 className="font-semibold">
                {data.wind}
              </h4>
            </div>

          </div>

        </div>

        {/* Final Decision */}

        <div className="rounded-xl border border-[#E8B44B]/30 bg-[#E8B44B]/10 p-4">

          <h3 className="font-semibold text-[#E8B44B]">
            Final AI Recommendation
          </h3>

          <p className="mt-2 text-sm text-neutral-300 leading-7">
            {data.finalRecommendation}
          </p>

        </div>

      </div>

    </div>
  );
}