import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Prediction from "../components/Prediction";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#090909] text-white overflow-x-hidden">

      <Navbar />

      <main className="max-w-7xl mx-auto px-8">

        {/* HERO */}

        <section
          id="home"
          className="grid lg:grid-cols-2 gap-10 items-center pt-28 pb-12"
        >
          {/* LEFT */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#E8B44B]/40 bg-[#111111] px-5 py-2 text-sm text-[#E8B44B] shadow-lg shadow-[#E8B44B]/10">
              AI Powered Smart Transportation
            </span>

           <h1 className="mt-6 text-4xl lg:text-5xl font-black leading-tight">
              Smart Traffic
              <br />
              <span className="text-[#E8B44B]">
                Prediction
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-400">
              AI powered traffic congestion prediction,
              accident risk analysis and intelligent route
              planning for safer journeys.
            </p>

            {/* FEATURES */}

            <div className="mt-12 grid grid-cols-2 gap-5">

              <div className="rounded-2xl border border-[#2b2b2b] bg-[#111111] p-4 hover:border-[#E8B44B] duration-300">
                <h3 className="font-semibold text-lg">
                  AI Prediction
                </h3>

                <p className="text-gray-500 mt-2">
                  Live congestion analysis
                </p>
              </div>

              <div className="rounded-2xl border border-[#2b2b2b] bg-[#111111] p-4 hover:border-[#E8B44B] duration-300">
                <h3 className="font-semibold text-lg">
                  Risk Analysis
                </h3>

                <p className="text-gray-500 mt-2">
                  Accident probability
                </p>
              </div>

              <div className="rounded-2xl border border-[#2b2b2b] bg-[#111111] p-4 hover:border-[#E8B44B] duration-300">
                <h3 className="font-semibold text-lg">
                  Smart Routing
                </h3>

                <p className="text-gray-500 mt-2">
                  Best possible route
                </p>
              </div>

              <div className="rounded-2xl border border-[#2b2b2b] bg-[#111111] p-4 hover:border-[#E8B44B] duration-300">
                <h3 className="font-semibold text-lg">
                  Live Weather
                </h3>

                <p className="text-gray-500 mt-2">
                  Real time conditions
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            <div className="absolute w-96 h-96 rounded-full bg-[#E8B44B]/10 blur-[140px]" />

            <div className="relative w-[450px] h-[450px] rounded-[40px] border border-[#2b2b2b] bg-[#111111]">

              <div className="absolute top-10 left-12 w-5 h-5 rounded-full bg-[#E8B44B]" />

              <div className="absolute bottom-16 right-12 w-5 h-5 rounded-full bg-[#E8B44B]" />
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 380 380"
                >
                <path
                  d="M70 70
                    C130 90
                    170 180
                    250 210
                    C310 230
                    300 300
                    330 330"
                  stroke="#E8B44B"
                  strokeWidth="3"
                  strokeDasharray="10 8"
                  fill="none"
                />
              </svg>

              <div className="absolute top-8 right-8 rounded-2xl bg-[#181818] border border-[#2b2b2b] px-5 py-4">

                <p className="text-sm text-gray-400">
                  Traffic Level
                </p>

                <h3 className="text-[#E8B44B] font-bold text-xl">
                  Moderate
                </h3>

              </div>

              <div className="absolute bottom-8 left-8 rounded-2xl bg-[#181818] border border-[#2b2b2b] px-5 py-4">

                <p className="text-sm text-gray-400">
                  Risk Score
                </p>

                <h3 className="text-[#E8B44B] font-bold text-xl">
                  18%
                </h3>

              </div>

            </div>

          </div>

        </section>
        <section id="features">
          <Features />
        </section>

        <section id="prediction">
          <Prediction />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

    </div>
  );
}