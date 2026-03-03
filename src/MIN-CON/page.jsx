import React from "react";

export default function NextCon() {
  const highlights = [
    { value: "3+", label: "Years Building Products" },
    { value: "25+", label: "Projects Delivered" },
    { value: "15+", label: "Team Collaborations" },
    { value: "24/7", label: "Support Mindset" },
  ];

  const timeline = [
    {
      period: "2025 - Present",
      role: "Full-Stack Web Developer",
      summary:
        "Building production-ready applications using React, Next.js, Node.js, and MongoDB.",
    },
    {
      period: "2024 - 2025",
      role: "Frontend Developer",
      summary:
        "Designed responsive interfaces, improved UX consistency, and optimized page speed.",
    },
    {
      period: "2023 - 2024",
      role: "Learning & Foundations",
      summary:
        "Focused on understanding how code works: JavaScript fundamentals, problem-solving, and core frontend/backend concepts.",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-10 md:mb-14">
        <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
          Work Experience
        </h3>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base md:text-lg">
          A clear snapshot of my professional growth, delivery record, and hands-on engineering work.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        {highlights.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm"
          >
            <p className="text-3xl md:text-4xl font-bold text-cyan-300">{item.value}</p>
            <p className="mt-2 text-sm md:text-base text-gray-200">{item.label}</p>
          </article>
        ))}
      </div>

      <div className="max-w-4xl mx-auto space-y-5">
        {timeline.map((item) => (
          <article
            key={item.role}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-sm"
          >
            <p className="text-sm md:text-base text-cyan-300 font-semibold">{item.period}</p>
            <h4 className="text-xl md:text-2xl font-bold text-white mt-1">{item.role}</h4>
            <p className="text-gray-300 mt-2 leading-relaxed">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
