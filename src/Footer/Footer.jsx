import React from "react";
import { Phone, Mail, MapPin, Code2, GraduationCap, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container mx-auto px-6 py-16 md:py-20 border-t border-white/10 mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
            Contact
          </h3>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Have a project in mind? Reach out and let&apos;s build something valuable together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-cyan-300 mb-6">Contact Info</h4>
            <div className="space-y-5 text-gray-200">
              <a href="tel:+252610909060" className="flex items-center gap-4 hover:text-cyan-300 transition">
                <Phone className="w-5 h-5 text-cyan-300" />
                <span>+252 610 909 060</span>
              </a>

              <a
                href="mailto:ishakabdiaziz9060@gmail.com"
                className="flex items-center gap-4 hover:text-cyan-300 transition break-all"
              >
                <Mail className="w-5 h-5 text-cyan-300" />
                <span>ishakabdiaziz9060@gmail.com</span>
              </a>

              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-cyan-300" />
                <span>Mogadishu, Somalia</span>
              </div>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:ishakabdiaziz9060@gmail.com"
                className="text-center px-5 py-3 rounded-full bg-cyan-300 text-black font-bold hover:bg-cyan-400 transition"
              >
                Send Email
              </a>
              <a
                href="tel:+252610909060"
                className="text-center px-5 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-pink-300 mb-6">Profile</h4>
            <div className="space-y-5 text-gray-200">
              <div className="flex items-center gap-4">
                <Code2 className="w-5 h-5 text-pink-300" />
                <span>Full-Stack Web Developer</span>
              </div>

              <div className="flex items-center gap-4">
                <GraduationCap className="w-5 h-5 text-pink-300" />
                <span>SIMAD University</span>
              </div>

              <div className="flex items-center gap-4">
                <Globe className="w-5 h-5 text-pink-300" />
                <span>Learning and building every day</span>
              </div>
            </div>

          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          © {new Date().getFullYear()} Ishak. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
