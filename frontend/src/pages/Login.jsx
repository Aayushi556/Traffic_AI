import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post("/login", formData);
    // localStorage.setItem("token", response.data.access_token);
    // localStorage.setItem("user", JSON.stringify(response.data.user));
    // navigate("/prediction");
    localStorage.setItem("isLoggedIn", "true");
    if (response.data.success) {

      // Save Token
      localStorage.setItem(
        "token",
        response.data.access_token
      );

      // Save User
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // Redirect
      navigate("/prediction");

    } else {
      alert(response.data.message);
    }

  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Login failed!"
    );
  }
};

  return (
    <div className="min-h-screen bg-[#090909] text-white overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-[#E8B44B]/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#E8B44B]/10 blur-[140px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

        <div className="grid w-full max-w-6xl lg:grid-cols-2 gap-12 items-center">
                  {/* Left Side */}

          <div className="hidden lg:block">

            <h1 className="mt-8 text-6xl font-bold leading-tight">

              Welcome

              <span className="block text-[#E8B44B]">
                Back
              </span>

            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-400">

              Login to access your intelligent traffic prediction dashboard.
              Analyze congestion, weather conditions, accident risk and
              AI-powered travel recommendations in real time.

            </p>

            <div className="mt-12 space-y-6">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#181818] border border-[#2a2a2a]">

                  🚦

                </div>

                <div>

                  <h3 className="font-semibold">
                    Live Traffic Prediction
                  </h3>

                  <p className="text-sm text-neutral-400">

                    Predict congestion using AI models.

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#181818] border border-[#2a2a2a]">

                  🌦️

                </div>

                <div>

                  <h3 className="font-semibold">
                    Weather Analysis
                  </h3>

                  <p className="text-sm text-neutral-400">

                    Live weather integration for accurate predictions.

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#181818] border border-[#2a2a2a]">

                  🤖

                </div>

                <div>

                  <h3 className="font-semibold">
                    AI Recommendation
                  </h3>

                  <p className="text-sm text-neutral-400">

                    Smart suggestions for a safer journey.

                  </p>

                </div>

              </div>

            </div>

          </div>
                    {/* Login Card */}

          <div className="rounded-3xl border border-[#2a2a2a] bg-[#111111]/90 backdrop-blur-xl p-5 shadow-2xl">

            <h2 className="text-3xl font-bold">
              Login 
            </h2>

            <p className="mt-2 text-neutral-400">
              Login to continue your AI traffic journey.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >

              {/* Email */}

              <div>

                <label className="mb-3 block text-sm font-medium">
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-4 top-4 text-neutral-500"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-[#2a2a2a] bg-[#181818] py-4 pl-12 pr-4 outline-none transition focus:border-[#E8B44B]"
                  />

                </div>

              </div>

              {/* Password */}

              <div>

                <label className="mb-3 block text-sm font-medium">
                  Password
                </label>

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute left-4 top-4 text-neutral-500"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full rounded-2xl border border-[#2a2a2a] bg-[#181818] py-4 pl-12 pr-14 outline-none transition focus:border-[#E8B44B]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4 text-neutral-400 hover:text-[#E8B44B]"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>

                </div>

              </div>

              {/* Remember + Forgot */}

              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 cursor-pointer">

                  <input
                    type="checkbox"
                    className="accent-[#E8B44B]"
                  />

                  Remember me

                </label>

               <Link
                  to="/forgot-password"
                  className="text-[#E8B44B] hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              {/* Login Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#E8B44B] py-4 font-semibold text-black transition hover:scale-[1.02]"
              >
                Log In

                <ArrowRight size={20} />

              </button>
                            {/* Divider */}

              <div className="flex items-center gap-4">

                <div className="h-px flex-1 bg-[#2a2a2a]" />

                <span className="text-sm text-neutral-500">
                  OR
                </span>

                <div className="h-px flex-1 bg-[#2a2a2a]" />

              </div>

              {/* Google Button */}

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[#2a2a2a] bg-[#181818] py-4 font-medium transition hover:border-[#E8B44B] hover:text-[#E8B44B]"
              >

                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-5 w-5"
                />

                Continue with Google

              </button>

              {/* Signup */}

              <p className="pt-2 text-center text-neutral-400">

                Don't have an account?{" "}

                <Link
                  to="/signup"
                  className="font-semibold text-[#E8B44B] hover:underline"
                >
                  Create Account
                </Link>

              </p>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}