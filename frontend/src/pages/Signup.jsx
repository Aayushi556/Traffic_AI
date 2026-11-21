import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("isLoggedIn", "true");
  //   navigate("/prediction");

  //   console.log(formData);

  //   // Backend Signup API
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    alert("Please fill all fields");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const response = await api.post("/signup", {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    if (response.data.success) {
      alert("Account created successfully!");

      navigate("/login");
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.error(error);

    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("Something went wrong.");
    }
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

              Create

              <span className="block text-[#E8B44B]">
                Account
              </span>

            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-400">

              Create your account to access intelligent traffic prediction,
              live weather analysis, accident risk assessment and
              AI-powered travel recommendations.

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
                    {/* Signup Card */}

        <div className="rounded-3xl border border-[#2a2a2a] bg-[#111111]/90 backdrop-blur-xl p-5 shadow-2xl max-h-[85vh] overflow-y-auto custom-scroll">
            <h2 className="text-3xl font-bold">
              Create Account
            </h2>

            <p className="mt-2 text-neutral-400">
              Create your account to continue your AI traffic journey.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >

              {/* Full Name */}

              <div>

                <label className="mb-3 block text-sm font-medium">
                  Full Name
                </label>

                <div className="relative">

                  <User
                    size={18}
                    className="absolute left-4 top-4 text-neutral-500"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-[#2a2a2a] bg-[#181818] py-4 pl-12 pr-4 outline-none transition focus:border-[#E8B44B]"
                  />

                </div>

              </div>

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
                    placeholder="Create a password"
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

              {/* Confirm Password */}

              <div>

                <label className="mb-3 block text-sm font-medium">
                  Confirm Password
                </label>

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute left-4 top-4 text-neutral-500"
                  />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="w-full rounded-2xl border border-[#2a2a2a] bg-[#181818] py-4 pl-12 pr-14 outline-none transition focus:border-[#E8B44B]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-4 text-neutral-400 hover:text-[#E8B44B]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>

                </div>

              </div>

              {/* Create Account Button */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#E8B44B] py-4 font-semibold text-black transition hover:scale-[1.02]"
              >
                Create Account

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

              {/* Login */}

              <p className="pt-2 text-center text-neutral-400">

                Already have an account?{" "}

                <Link
                  to="/login"
                  className="font-semibold text-[#E8B44B] hover:underline"
                >
                  Log In
                </Link>

              </p>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}