
import {
  MapPinned,
  CloudSun,
  BrainCircuit,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MapPinned,
    title: "Choose Route",
    desc: "Enter your source and destination to begin the prediction process.",
  },
  {
    number: "02",
    icon: CloudSun,
    title: "Weather Analysis",
    desc: "The system collects live weather conditions for your selected route.",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "AI Processing",
    desc: "Our machine learning models analyze congestion and accident risk.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Prediction Result",
    desc: "View traffic level, travel time, weather and accident risk instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-28 bg-[#090909]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

         

          <h2 className="mt-6 text-5xl font-bold text-white">
            How It Works
          </h2>

          <p className="mt-5 text-neutral-400 max-w-2xl mx-auto">
            A simple four-step AI workflow that predicts traffic congestion,
            accident risk and route conditions before you travel.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Gold Line */}

          <div className="hidden lg:block absolute top-12 left-24 right-24 h-[2px] bg-[#E8B44B]/30"></div>

          <div className="grid lg:grid-cols-4 gap-12">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative text-center group"
                >

                  {/* Circle */}

                  <div className="mx-auto w-24 h-24 rounded-full border-2 border-[#E8B44B] bg-[#111111] flex items-center justify-center shadow-[0_0_25px_rgba(232,180,75,0.12)] group-hover:shadow-[0_0_35px_rgba(232,180,75,0.35)] transition duration-300">

                    <Icon
                      size={34}
                      className="text-[#E8B44B]"
                    />

                  </div>

                  {/* Step */}

                  <p className="mt-5 text-[#E8B44B] font-semibold tracking-widest">
                    STEP {step.number}
                  </p>

                  {/* Title */}

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-neutral-400 leading-7 px-4">
                    {step.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}