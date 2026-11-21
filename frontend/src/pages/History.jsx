import { useEffect, useState } from "react";
import api from "../services/api";
import DashboardNavbar from "../components/DashboardNavbar";
import HistoryCard from "../components/history/HistoryCard";
import HistoryStats from "../components/history/HistoryStats";
export default function History() {
  const [history, setHistory] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
  const fetchHistory = async () => {
    try {
    const response = await api.get("/history");
    setHistory(response.data.history);
    setStats(response.data.stats);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const filteredHistory = history.filter((item) => {
  const query = search.trim().toLowerCase();

  return (
    item.source?.trim().toLowerCase().includes(query) ||
    item.destination?.trim().toLowerCase().includes(query)
  );
});
    console.log("Search:", search);
    console.log("History:", history);
    console.log("Filtered:", filteredHistory);
  useEffect(() => {
    fetchHistory();
  }, []);
    const handleClearAll = async () => {
    const confirmDelete = window.confirm(
        "Are you sure you want to delete all prediction history?"
    );

    if (!confirmDelete) return;

    try {
        await api.delete("/history");
        fetchHistory();
    } catch (err) {
        console.error(err);
    }
    };

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <DashboardNavbar />

      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="flex items-center justify-between">

        <div>

            <h1 className="text-4xl font-bold">
            Prediction History
            </h1>

            <p className="mt-2 text-neutral-400">
            View all your previous AI traffic predictions.
            </p>

        </div>

        {history.length > 0 && (
            <button
            onClick={handleClearAll}
            className="rounded-2xl bg-red-600 px-5 py-3 font-semibold hover:bg-red-700"
            >
            🗑 Clear All
            </button>
        )}

        </div>
        <div className="mt-8">
           <input
                type="text"
                placeholder="🔍 Search by Source or Destination..."
                value={search}
                onChange={(e) => {
                    console.log(e.target.value);
                    setSearch(e.target.value);
                }}
                className="w-full rounded-2xl border border-[#2a2a2a] bg-[#111111] px-5 py-4 text-white outline-none focus:border-[#E8B44B]"
            />
            </div>
        <HistoryStats stats={stats} />
        {loading ? (
          <p className="mt-10">Loading...</p>
        ) : history.length === 0 ? (
          <p className="mt-10 text-neutral-500">
            No prediction history found.
          </p>
        ) : (
          <div className="mt-10 space-y-5">
            {filteredHistory.map((item) => (
              <HistoryCard
                key={item.id}
                data={item}
                refresh={fetchHistory}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}