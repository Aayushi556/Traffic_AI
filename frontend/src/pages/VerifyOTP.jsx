import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, ArrowRight } from "lucide-react";
import api from "../services/api";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const email = localStorage.getItem("resetEmail");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/verify-otp", {
        email,
        otp,
      });

      if (response.data.success) {
        alert("OTP Verified Successfully");

        navigate("/reset-password");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Verification failed."
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl border border-[#2a2a2a] bg-[#111111] p-8">

        <h2 className="text-3xl font-bold">
          Verify OTP
        </h2>

        <p className="mt-2 text-neutral-400">
          Enter the 6-digit OTP sent to your email.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

          <div>

            <label className="mb-3 block">
              OTP
            </label>

            <div className="relative">

              <ShieldCheck
                size={18}
                className="absolute left-4 top-4 text-neutral-500"
              />

              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full rounded-2xl border border-[#2a2a2a] bg-[#181818] py-4 pl-12 pr-4 outline-none focus:border-[#E8B44B]"
              />

            </div>

          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#E8B44B] py-4 font-semibold text-black"
          >
            Verify OTP
            <ArrowRight size={20}/>
          </button>

          <Link
            to="/forgot-password"
            className="block text-center text-[#E8B44B]"
          >
            Back
          </Link>

        </form>

      </div>

    </div>
  );
}