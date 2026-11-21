

function Hero() {
  return (
    <section className="relative overflow-hidden py-24 px-6 text-center">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[140px]"></div>

      <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[160px]"></div>

      <h1 className="text-6xl font-extrabold tracking-tight">
        Smart Traffic
      </h1>

      <h1 className="text-6xl font-extrabold text-cyan-400">
        Congestion Prediction
      </h1>

      <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
        AI Powered Traffic Congestion Prediction,
        Route Intelligence and Accident Risk Analysis
        for smarter and safer journeys.
      </p>

      <div className="mt-10 flex justify-center gap-6">

        <div className="bg-slate-900/70 backdrop-blur-lg px-8 py-4 rounded-xl border border-cyan-500/20">
          🚦 AI Prediction
        </div>

        <div className="bg-slate-900/70 backdrop-blur-lg px-8 py-4 rounded-xl border border-cyan-500/20">
          ⚠ Accident Risk
        </div>

        <div className="bg-slate-900/70 backdrop-blur-lg px-8 py-4 rounded-xl border border-cyan-500/20">
          🗺 Smart Routing
        </div>

      </div>

    </section>
  );
}

export default Hero;