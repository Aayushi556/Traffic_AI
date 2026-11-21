import {
  CloudSun,
  Thermometer,
  Droplets,
  Wind,
} from "lucide-react";

export default function WeatherCard({ data }) {
  return (
    <div className="group rounded-2xl border border-[#232323] bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E8B44B]/40">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#181818]">
          <CloudSun size={20} className="text-[#E8B44B]" />
        </div>

        <span className="rounded-full bg-[#181818] px-3 py-1 text-xs text-[#E8B44B]">
          Live
        </span>

      </div>

      {/* Title */}

      <p className="mt-6 text-sm uppercase tracking-wider text-neutral-500">
        Weather
      </p>

      {/* Temperature */}

      <h2 className="mt-2 text-4xl font-bold text-[#E8B44B]">
        {data.temperature}
      </h2>

      <p className="mt-1 text-neutral-400">
        {data.weather}
      </p>

      {/* Details */}

      <div className="mt-8 space-y-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2 text-neutral-400">
            <Thermometer size={16} />
            Temperature
          </div>

          <span>{data.temperature}</span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2 text-neutral-400">
            <Droplets size={16} />
            Humidity
          </div>

          <span>{data.humidity}</span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2 text-neutral-400">
            <Wind size={16} />
            Wind Speed
          </div>

          <span>{data.wind}</span>

        </div>

      </div>

    </div>
  );
}