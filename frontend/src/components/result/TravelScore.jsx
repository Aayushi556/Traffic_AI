import { ShieldCheck } from "lucide-react";

export default function TravelScore({ data }) {

  const score = data.travelScore || 0;

  const circumference = 2 * Math.PI * 70;

  const offset =
    circumference -
    (score / 100) * circumference;

  return (
    <div className="rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">

      <div className="flex items-center justify-between">

        <div>

          <p className="uppercase tracking-[4px] text-sm text-neutral-500">
            AI Score
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Travel Score
          </h2>

        </div>

        <ShieldCheck
          className="text-[#E8B44B]"
          size={34}
        />

      </div>

      <div className="mt-8 flex justify-center">

        <div className="relative h-44 w-44">

          <svg
            className="-rotate-90"
            width="176"
            height="176"
          >

            <circle
              cx="88"
              cy="88"
              r="70"
              stroke="#262626"
              strokeWidth="12"
              fill="transparent"
            />

            <circle
              cx="88"
              cy="88"
              r="70"
              stroke="#E8B44B"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />

          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <h1 className="text-5xl font-bold">
              {score}
            </h1>

            <p className="text-neutral-400">
              /100
            </p>

          </div>

        </div>

      </div>

      <div className="mt-6 rounded-2xl bg-[#181818] p-5">

        <p className="text-neutral-400">
          AI Confidence
        </p>

        <h3 className="mt-1 text-2xl font-bold text-[#E8B44B]">
        {data.aiConfidence || "--"}%
        </h3>

      </div>

    </div>
  );
}