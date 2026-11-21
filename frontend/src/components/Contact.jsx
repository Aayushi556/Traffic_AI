import {
  Mail,
  Phone,
  MapPin,
  Send,
  Globe,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          

          <h2 className="mt-6 text-5xl font-bold text-white">
            Get In Touch
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-neutral-400">
            Have questions or feedback? We'd love to hear from you.
            Connect with us and let's build smarter transportation together.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <div className="rounded-3xl border border-[#2A2A2A] bg-[#111111] p-10">

            <h3 className="text-3xl font-bold text-white">
              Smart Traffic AI
            </h3>

            <p className="mt-5 text-neutral-400 leading-8">
              AI-powered traffic congestion prediction and accident
              risk analysis for safer, smarter and faster travel.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-[#E8B44B]" />
                <span className="text-neutral-300">
                  smarttraffic@example.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-[#E8B44B]" />
                <span className="text-neutral-300">
                  +91 9876543210
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-[#E8B44B]" />
                <span className="text-neutral-300">
                  Greater Noida, India
                </span>
              </div>

            </div>

            {/* Social */}

            <div className="mt-10 flex gap-5">

              <button className="rounded-full border border-[#E8B44B]/30 p-3 hover:bg-[#E8B44B] hover:text-black transition">
                <Globe size={22} />
              </button>

              <button className="rounded-full border border-[#E8B44B]/30 p-3 hover:bg-[#E8B44B] hover:text-black transition">
                <Send size={22} />
              </button>

            </div>

          </div>

          {/* Right Side */}

          <form className="rounded-3xl border border-[#2A2A2A] bg-[#111111] p-10">

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#181818] px-5 py-4 text-white outline-none focus:border-[#E8B44B]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#181818] px-5 py-4 text-white outline-none focus:border-[#E8B44B]"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#181818] px-5 py-4 text-white outline-none resize-none focus:border-[#E8B44B]"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#E8B44B] py-4 font-semibold text-black transition hover:scale-[1.02]"
              >
                <Send size={20} />
                Send Message
              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}