import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  ArrowRight,
} from "lucide-react";
import api from "../services/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/forgot-password", {
        email,
      });

      if (response.data.success) {
        alert(response.data.message);

        // Save email for OTP verification
        localStorage.setItem("resetEmail", email);

        // Redirect to Verify OTP page
        navigate("/verify-otp");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong."
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
              Forgot
              <span className="block text-[#E8B44B]">
                Password?
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-400">
              Enter your registered email address and we'll send you a
              6-digit verification OTP to securely reset your password.
            </p>

            <div className="mt-12 space-y-6">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2a2a2a] bg-[#181818]">
                  📧
                </div>

                <div>
                  <h3 className="font-semibold">
                    OTP Verification
                  </h3>

                  <p className="text-sm text-neutral-400">
                    A secure 6-digit OTP will be sent to your registered
                    email.
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2a2a2a] bg-[#181818]">
                  🔒
                </div>

                <div>
                  <h3 className="font-semibold">
                    Account Security
                  </h3>

                  <p className="text-sm text-neutral-400">
                    Your account remains protected throughout the password
                    recovery process.
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2a2a2a] bg-[#181818]">
                  ⚡
                </div>

                <div>
                  <h3 className="font-semibold">
                    Quick Recovery
                  </h3>

                  <p className="text-sm text-neutral-400">
                    Verify OTP and create a new password within minutes.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Card */}

          <div className="rounded-3xl border border-[#2a2a2a] bg-[#111111]/90 backdrop-blur-xl p-5 shadow-2xl">

            <h2 className="text-3xl font-bold">
              Forgot Password
            </h2>

            <p className="mt-2 text-neutral-400">
              Enter your registered email to receive a verification OTP.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >

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
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your registered email"
                    className="w-full rounded-2xl border border-[#2a2a2a] bg-[#181818] py-4 pl-12 pr-4 outline-none transition focus:border-[#E8B44B]"
                  />

                </div>

              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#E8B44B] py-4 font-semibold text-black transition hover:scale-[1.02]"
              >
                Send OTP
                <ArrowRight size={20} />
              </button>

              <div className="flex items-center gap-4">

                <div className="h-px flex-1 bg-[#2a2a2a]" />

                <span className="text-sm text-neutral-500">
                  OR
                </span>

                <div className="h-px flex-1 bg-[#2a2a2a]" />

              </div>

              <Link
                to="/login"
                className="flex w-full items-center justify-center rounded-2xl border border-[#2a2a2a] bg-[#181818] py-4 font-medium transition hover:border-[#E8B44B] hover:text-[#E8B44B]"
              >
                Back to Login
              </Link>

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