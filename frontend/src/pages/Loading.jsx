

import { BrainCircuit, LoaderCircle } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Loading() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/result", {
        state: location.state,
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, location]);

  return (
    <div className="min-h-screen bg-[#090909] flex items-center justify-center px-6">

      <div className="w-full max-w-xl rounded-3xl border border-[#232323] bg-[#111111] p-10">

        {/* AI Icon */}

        <div className="flex justify-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#E8B44B]/20 bg-[#181818]">

            <BrainCircuit
              size={42}
              className="text-[#E8B44B]"
            />

          </div>

        </div>

        {/* Heading */}

        <h1 className="mt-8 text-center text-3xl font-bold text-white">
          AI Processing
        </h1>

        <p className="mt-3 text-center text-neutral-400">
          Please wait while our AI analyzes traffic,
          weather and accident risk...
        </p>

        {/* Progress */}

        <div className="mt-10">

          <div className="h-2 overflow-hidden rounded-full bg-[#202020]">

            <div className="loading-bar h-full rounded-full bg-[#E8B44B]" />

          </div>

        </div>

        {/* Steps */}

        <div className="mt-10 space-y-4">

          <div className="flex items-center gap-3 text-neutral-300">
            <LoaderCircle
              className="animate-spin text-[#E8B44B]"
              size={18}
            />
            Fetching Live Weather...
          </div>

          <div className="flex items-center gap-3 text-neutral-300">
            <LoaderCircle
              className="animate-spin text-[#E8B44B]"
              size={18}
            />
            Calculating Traffic Density...
          </div>

          <div className="flex items-center gap-3 text-neutral-300">
            <LoaderCircle
              className="animate-spin text-[#E8B44B]"
              size={18}
            />
            Predicting Accident Risk...
          </div>

          <div className="flex items-center gap-3 text-neutral-300">
            <LoaderCircle
              className="animate-spin text-[#E8B44B]"
              size={18}
            />
            Generating AI Recommendation...
          </div>

        </div>

      </div>

    </div>
  );
}