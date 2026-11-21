
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { useLocation } from "react-router-dom";

export default function TrafficTrend() {
  const { state } = useLocation();

  const data =
    state?.prediction?.traffic_trend || [];

  return (
    <div className="rounded-3xl border border-[#2a2a2a] bg-[#111111] p-6 shadow-xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Traffic Trend
        </h2>

        <p className="mt-1 text-neutral-400">
          AI estimated congestion throughout the day
        </p>
      </div>

      <div className="h-80">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid
                stroke="#2a2a2a"
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="time"
                stroke="#999"
              />

              <YAxis stroke="#999" />

              <Tooltip
                contentStyle={{
                  background: "#181818",
                  border: "1px solid #E8B44B",
                  borderRadius: "12px",
                }}
              />

              <Line
                type="monotone"
                dataKey="traffic"
                stroke="#E8B44B"
                strokeWidth={4}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center text-neutral-500">
            No traffic trend data available.
          </div>
        )}
      </div>
    </div>
  );
}