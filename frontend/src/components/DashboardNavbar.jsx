import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  History,
  BrainCircuit,
  Menu,
  X,
} from "lucide-react";

export default function DashboardNavbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#090909]/90 backdrop-blur-lg border-b border-[#1f1f1f]">

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-bold text-[#E8B44B]"
        >
          Traffic AI
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/prediction"
            className={`flex items-center gap-2 transition ${
              location.pathname === "/prediction"
                ? "text-[#E8B44B]"
                : "text-white hover:text-[#E8B44B]"
            }`}
          >
            <BrainCircuit size={18} />
            Prediction
          </Link>

          <Link
            to="/history"
            className={`flex items-center gap-2 transition ${
              location.pathname === "/history"
                ? "text-[#E8B44B]"
                : "text-white hover:text-[#E8B44B]"
            }`}
          >
            <History size={18} />
            History
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 rounded-xl bg-[#E8B44B] px-4 py-2 text-black font-semibold hover:opacity-90"
          >
            <Home size={18} />
            Home
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              localStorage.removeItem("isLoggedIn");
              window.location.href = "/login";
            }}
            className="rounded-xl bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
          >
            Logout
          </button>



        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Dropdown */}

      {menuOpen && (
        <div className="absolute top-20 right-5 w-56 rounded-2xl border border-[#2a2a2a] bg-[#111111] shadow-2xl md:hidden">

          <div className="flex flex-col p-4 gap-3">

            <Link
              to="/prediction"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 transition ${
                location.pathname === "/prediction"
                  ? "bg-[#E8B44B] text-black"
                  : "hover:bg-[#1b1b1b] text-white"
              }`}
            >
              <BrainCircuit size={18} />
              Prediction
            </Link>

            <Link
              to="/history"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 transition ${
                location.pathname === "/history"
                  ? "bg-[#E8B44B] text-black"
                  : "hover:bg-[#1b1b1b] text-white"
              }`}
            >
              <History size={18} />
              History
            </Link>

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 rounded-xl bg-[#E8B44B] px-3 py-3 font-semibold text-black"
            >
              <Home size={18} />
              Home
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                localStorage.removeItem("isLoggedIn");
                window.location.href = "/login";
              }}
              className="flex items-center justify-center rounded-xl bg-red-600 px-3 py-3 font-semibold text-white hover:bg-red-700"
            >
              Logout
            </button>
          </div>

        </div>
      )}

    </nav>
  );
}