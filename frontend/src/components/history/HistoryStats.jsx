import { Activity, ShieldCheck, Brain, AlertTriangle } from "lucide-react";

export default function HistoryStats({ stats }) {
  const cards = [
    {
      title: "Total Predictions",
      value: stats.total_predictions,
      icon: Activity,
    },
    {
      title: "Average Score",
      value: stats.average_score + "/100",
      icon: ShieldCheck,
    },
    {
      title: "AI Confidence",
      value: stats.average_confidence + "%",
      icon: Brain,
    },
    {
      title: "High Risk Trips",
      value: stats.high_risk,
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-5 mt-10">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="rounded-3xl border border-[#2a2a2a] bg-[#111111] p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-neutral-400 text-sm">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>
              </div>

              <Icon
                size={34}
                className="text-[#E8B44B]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}