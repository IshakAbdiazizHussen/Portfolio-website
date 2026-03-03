import React from "react";

export default function ThirdCon() {
  const experience = [
    {
      period: "2025 - Present",
      title: "Full-Stack Web Developer",
      text: "Developing complete web products, from UI architecture to API and database integration.",
    },
    {
      period: "2024 - 2025",
      title: "Frontend Developer",
      text: "Focused on responsive interfaces, usability improvements, and clean component systems.",
    },
    {
      period: "2023 - 2024",
      title: "Learning & Foundations",
      text: "Built strong coding fundamentals in JavaScript, React basics, and web development principles.",
    },
  ];

  const education = [
    {
      period: "University",
      title: "BSc in Computer Science",
      text: "Academic training in software engineering, algorithms, and system thinking.",
    },
    {
      period: "Bootcamp",
      title: "Web Development Bootcamp",
      text: "Hands-on full-stack practice with modern frameworks and practical project delivery.",
    },
    {
      period: "Specialized Courses",
      title: "JavaScript, React, Next.js, Node.js",
      text: "Advanced online coursework focused on production-ready frontend and backend development.",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-10 md:mb-14">
        <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
          Experience & Education
        </h3>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-base md:text-lg">
          My professional journey and learning path that shape how I solve real-world problems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-sm">
          <h4 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-6">My Experience</h4>
          <div className="space-y-4">
            {experience.map((item) => (
              <article key={item.title} className="rounded-xl border border-white/10 bg-black/20 p-4 md:p-5">
                <p className="text-sm text-cyan-300 font-semibold">{item.period}</p>
                <h5 className="text-lg md:text-xl font-bold text-white mt-1">{item.title}</h5>
                <p className="text-gray-300 mt-2 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-sm">
          <h4 className="text-2xl md:text-3xl font-bold text-pink-300 mb-6">My Education</h4>
          <div className="space-y-4">
            {education.map((item) => (
              <article key={item.title} className="rounded-xl border border-white/10 bg-black/20 p-4 md:p-5">
                <p className="text-sm text-pink-300 font-semibold">{item.period}</p>
                <h5 className="text-lg md:text-xl font-bold text-white mt-1">{item.title}</h5>
                <p className="text-gray-300 mt-2 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
