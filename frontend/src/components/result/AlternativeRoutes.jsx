
import { useLocation } from "react-router-dom";

export default function AlternativeRoutes() {
  const { state } = useLocation();

  const routes = state?.prediction?.alternative_routes || [];

  return (
    <div className="rounded-3xl border border-[#2a2a2a] bg-[#111111] p-6">
      <h2 className="text-2xl font-bold">
        Alternative Routes Comparison
      </h2>

      <p className="mt-1 text-neutral-400">
        AI compared multiple routes and selected the best one.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#2a2a2a] text-left">
              <th className="py-4 px-4">Route</th>
              <th className="py-4 px-4">ETA</th>
              <th className="py-4 px-4">Distance</th>
              <th className="py-4 px-4">Traffic</th>
              <th className="py-4 px-4">Fuel</th>
              <th className="py-4 px-4">AI Decision</th>
            </tr>
          </thead>

          <tbody>
            {routes.length > 0 ? (
              routes.map((route, index) => (
                <tr
                  key={index}
                  className="border-b border-[#1e1e1e] hover:bg-[#181818] transition"
                >
                  <td className="py-5 px-4 font-semibold">
                    {route.name}
                  </td>

                  <td className="py-5 px-4">
                    {route.travel_time_min} min
                  </td>

                  <td className="py-5 px-4">
                    {route.distance_km} km
                  </td>

                  <td
                    className={`py-5 px-4 font-medium ${
                      route.traffic === "Low"
                        ? "text-green-400"
                        : route.traffic === "Medium"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    {route.traffic}
                  </td>

                  <td className="py-5 px-4">
                    {route.fuel} L
                  </td>

                  <td className="py-5 px-4 font-semibold text-[#E8B44B]">
                    {route.recommendation}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="py-8 text-center text-neutral-500"
                >
                  No alternative routes available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}