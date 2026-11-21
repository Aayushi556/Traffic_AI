import { useState } from "react";
import { Car, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#E8B44B]/10 bg-[#090909]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E8B44B]/20 bg-[#161616]">
            <Car className="text-[#E8B44B]" size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide">
              Smart Traffic AI
            </h1>

            <p className="text-xs text-neutral-400">
              Congestion Prediction
            </p>
          </div>

        </div>

        {/* Desktop Menu */}

        <nav className="hidden gap-10 text-sm text-neutral-300 lg:flex">

          <a
            href="#home"
            className="transition hover:text-[#E8B44B]"
          >
            Home
          </a>

          <a
            href="#features"
            className="transition hover:text-[#E8B44B]"
          >
            Features
          </a>

          <a
            href="#contact"
            className="transition hover:text-[#E8B44B]"
          >
            Contact
          </a>

        </nav>

        {/* Desktop Buttons */}

        <div className="hidden items-center gap-4 lg:flex">

          <Link
            to="/login"
            className="rounded-full border border-[#2a2a2a] px-6 py-2 text-sm font-medium text-white transition hover:border-[#E8B44B] hover:text-[#E8B44B]"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-[#E8B44B] px-6 py-2 text-sm font-semibold text-black transition hover:scale-105"
          >
            Sign Up
          </Link>

        </div>

        {/* Mobile Menu Button */}

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

{menuOpen && (
  <div className="absolute top-20 right-6 w-52 rounded-2xl border border-[#2a2a2a] bg-[#111111] shadow-2xl lg:hidden">

    <div className="flex flex-col p-4 space-y-3">

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="rounded-lg px-3 py-2 transition hover:bg-[#1b1b1b] hover:text-[#E8B44B]"
      >
        Home
      </a>

      <a
        href="#features"
        onClick={() => setMenuOpen(false)}
        className="rounded-lg px-3 py-2 transition hover:bg-[#1b1b1b] hover:text-[#E8B44B]"
      >
        Features
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="rounded-lg px-3 py-2 transition hover:bg-[#1b1b1b] hover:text-[#E8B44B]"
      >
        Contact
      </a>

      <hr className="border-[#2a2a2a]" />

      <Link
        to="/login"
        onClick={() => setMenuOpen(false)}
        className="rounded-lg px-3 py-2 transition hover:bg-[#1b1b1b] hover:text-[#E8B44B]"
      >
        Login
      </Link>

      <Link
        to="/signup"
        onClick={() => setMenuOpen(false)}
        className="rounded-xl bg-[#E8B44B] py-2 text-center font-semibold text-black"
      >
        Sign Up
      </Link>

    </div>

  </div>
)}

    </header>
  );
};

export default Navbar;