"use client";

import React, { useState } from "react";

export default function SecCon() {
  const [openId, setOpenId] = useState(null);

  const services = [
    {
      id: "01",
      title: "Web Development",
      desc: "Modern responsive websites and web apps built with React, Next.js, and Tailwind CSS.",
      tag: "Frontend",
      details:
        "Includes responsive UI design, reusable component architecture, performance optimization, and SEO-friendly page structure.",
    },
    {
      id: "02",
      title: "Full-Stack Solutions",
      desc: "End-to-end product development from database design to polished UI and deployment.",
      tag: "Full Stack",
      details:
        "Includes authentication, dashboard workflows, API integration, data models, deployment setup, and production-ready architecture.",
    },
    {
      id: "03",
      title: "Fruit Store Management System",
      desc: "Complete system to manage fruits, stock, sales, pricing, and daily records with a clean dashboard.",
      tag: "Management",
      details:
        "Includes inventory tracking, low-stock alerts, sales analytics, invoice handling, and role-based admin/staff access.",
    },
    {
      id: "04",
      title: "Maintenance & Support",
      desc: "Continuous improvements, bug fixing, and performance optimization after launch.",
      tag: "Support",
      details:
        "Includes regular updates, monitoring, issue resolution, security checks, and feature enhancement planning.",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-10 md:mb-14">
        <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
          My Quality Services
        </h3>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          I deliver reliable web products with clean code, strong architecture, and user-focused design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {services.map((service) => (
          <article
            key={service.id}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <span className="text-xl md:text-2xl font-extrabold text-cyan-300">{service.id}</span>
              <span className="text-xs md:text-sm px-3 py-1 rounded-full border border-white/20 bg-black/20 text-white/90">
                {service.tag}
              </span>
            </div>

            <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">{service.title}</h4>
            <p className="text-gray-300 leading-relaxed">{service.desc}</p>

            <button
              type="button"
              onClick={() => setOpenId(openId === service.id ? null : service.id)}
              className="mt-6 text-cyan-300 font-semibold group-hover:translate-x-1 transition-transform"
            >
              {openId === service.id ? "Show Less ↑" : "Learn More →"}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openId === service.id ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm md:text-base text-gray-200 border-t border-white/10 pt-4">
                {service.details}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
