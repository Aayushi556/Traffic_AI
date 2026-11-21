import {
  BrainCircuit,
  Route,
  CloudSun,
  ShieldAlert,
  BarChart3,
  Bot,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Traffic Prediction",
    desc: "Predict congestion before you start your journey using machine learning.",
  },
  {
    icon: Route,
    title: "Smart Route Planning",
    desc: "Find the fastest and safest route based on live traffic conditions.",
  },
  {
    icon: ShieldAlert,
    title: "Accident Risk Analysis",
    desc: "Estimate accident probability using weather and traffic patterns.",
  },
  {
    icon: CloudSun,
    title: "Live Weather",
    desc: "Real-time weather information affecting road conditions.",
  },
  {
    icon: BarChart3,
    title: "Traffic Analytics",
    desc: "Visual insights and congestion statistics for better planning.",
  },
  {
    icon: Bot,
    title: "AI Recommendations",
    desc: "Receive intelligent travel suggestions powered by AI.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#090909]">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">


          <h2 className="mt-4 text-5xl font-bold text-white">
            Why Choose Smart Traffic AI
          </h2>

          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto text-lg">
            Everything you need for smarter, safer and faster transportation
            powered by Artificial Intelligence.
          </p>

        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-neutral-800 bg-[#111111] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#E8B44B]"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#161616] flex items-center justify-center group-hover:bg-[#E8B44B] transition">

                  <Icon
                    size={30}
                    className="text-[#E8B44B] group-hover:text-black"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-neutral-400 leading-7">
                  {feature.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}