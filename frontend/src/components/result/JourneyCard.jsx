
import {
  MapPin,
  Navigation,
  Route,
  Clock3,
  Calendar,
} from "lucide-react";

export default function JourneyCard({ data }) {
  return (
    <div className="rounded-2xl border border-[#232323] bg-[#111111] p-5">

      {/* Header */}

      <div className="flex flex-wrap items-center justify-between gap-4">

        <div>
          <p className="text-xs uppercase tracking-[3px] text-neutral-500">
            Journey Summary
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            {data.source}
            <span className="mx-3 text-[#E8B44B]">→</span>
            {data.destination}
          </h2>

          {/* Date & Time */}

          <div className="mt-3 flex flex-wrap gap-6 text-sm text-neutral-400">

            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#E8B44B]" />
              <span>{data.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={16} className="text-[#E8B44B]" />
              <span>{data.time}</span>
            </div>

          </div>

        </div>

        <div className="rounded-full border border-[#2a2a2a] bg-[#181818] px-4 py-2 text-xs text-[#E8B44B]">
         <div className="rounded-full border border-[#2a2a2a] bg-[#181818] px-4 py-2 text-xs text-[#E8B44B]">
            {data.distance !== "--"
              ? "● Live Route"
              : "● Route Unavailable"}
          </div>
        </div>

      </div>

      {/* Route */}

      <div className="mt-8 flex items-center">

        {/* Source */}

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#181818]">
            <MapPin size={18} className="text-[#E8B44B]" />
          </div>

          <div>
            <p className="text-sm text-neutral-500">
              Source
            </p>

            <h3 className="font-semibold">
              {data.source}
            </h3>

          </div>

        </div>

        {/* Line */}

        <div className="mx-6 flex-1">

          <div className="relative h-[2px] rounded-full bg-[#2a2a2a]">

            <div className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-[#E8B44B] to-transparent" />

          </div>

        </div>

        {/* Destination */}

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#181818]">
            <Navigation size={18} className="text-[#E8B44B]" />
          </div>

          <div>
            <p className="text-sm text-neutral-500">
              Destination
            </p>

            <h3 className="font-semibold">
              {data.destination}
            </h3>

          </div>

        </div>

      </div>

      {/* Bottom Stats */}

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-xl border border-[#232323] bg-[#181818] p-4">

          <div className="flex items-center gap-2 text-[#E8B44B]">

            <Route size={18} />

            <span className="text-sm">
              Distance
            </span>

          </div>

          <h3 className="mt-3 text-xl font-semibold">
            {data.distance}
          </h3>

        </div>

        <div className="rounded-xl border border-[#232323] bg-[#181818] p-4">

          <div className="flex items-center gap-2 text-[#E8B44B]">

            <Clock3 size={18} />

            <span className="text-sm">
              Estimated Time
            </span>

          </div>

          <h3 className="mt-3 text-xl font-semibold">
            {data.eta}
          </h3>

        </div>

      </div>

    </div>
  );
}