
import Image from "next/image";
import { Type, RectangleEllipsis, Layers, Server, Database, Globe, Paintbrush, Code2, } from "lucide-react";        
import NextCon from "../MIN-CON/page";
import SecCon from "../Sec-Con/page";
import ThirdCon from "@/ThirdCon/page";
import Footer from "@/Footer/Footer";

export default function Home() {
  const skills = [
    { name: "TypeScript", icon: <Type className="w-8 h-12 md:w-16 md:h-16 text-blue-500" /> },
    { name: "React",      icon: <RectangleEllipsis className="w-12 h-12 md:w-16 md:h-16 text-cyan-400" /> },
    { name: "Next.js",    icon: <Layers className="w-8 h-12 md:w-16 md:h-16 text-black" /> },
    { name: "Node.js",    icon: <Server className="w-8 h-12 md:w-16 md:h-16 text-green-500" /> },
    { name: "Express.js", icon: <Code2 className="w-8 h-12 md:w-16 md:h-16 text-gray-600" /> },
    { name: "MongoDB",    icon: <Database className="w-8 h-12 md:w-16 md:h-16 text-green-600" /> },
    { name: "HTML5",      icon: <Globe className="w-8 h-12 md:w-16 md:h-16 text-orange-500" /> },
    { name: "CSS3",       icon: <Paintbrush className="w-8 h-12 md:w-16 md:h-16 text-blue-400" /> },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white scroll-smooth">
        {/* Navigation */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/50 backdrop-blur-lg">
          <nav className="container mx-auto px-6 py-4">
            <input id="nav-toggle" type="checkbox" className="peer sr-only" />

            <div className="flex items-center justify-between">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                I.Dev
              </h1>

              <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
                <li><a href="#home" className="hover:text-cyan-300 transition">Home</a></li>
                <li><a href="#work" className="hover:text-cyan-300 transition">Work</a></li>
                <li><a href="#services" className="hover:text-cyan-300 transition">Services</a></li>
                <li><a href="#experience" className="hover:text-cyan-300 transition">Experience</a></li>
                <li><a href="#contact" className="hover:text-cyan-300 transition">Contact</a></li>
              </ul>

              <a
                href="#contact"
                className="hidden md:inline-flex px-8 py-3 bg-cyan-300 text-black font-bold rounded-full hover:bg-cyan-400 hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Get In Touch
              </a>

              <label
                htmlFor="nav-toggle"
                className="md:hidden inline-flex flex-col items-center justify-center rounded-lg border border-white/20 px-3 py-2 cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                <span className="block h-0.5 w-5 bg-white mb-1.5"></span>
                <span className="block h-0.5 w-5 bg-white mb-1.5"></span>
                <span className="block h-0.5 w-5 bg-white"></span>
              </label>
            </div>

            <div className="md:hidden overflow-hidden max-h-0 peer-checked:max-h-96 transition-all duration-300">
              <ul className="pt-4 pb-2 flex flex-col gap-4 text-lg font-medium">
                <li><a href="#home" className="hover:text-cyan-300 transition">Home</a></li>
                <li><a href="#work" className="hover:text-cyan-300 transition">Work</a></li>
                <li><a href="#services" className="hover:text-cyan-300 transition">Services</a></li>
                <li><a href="#experience" className="hover:text-cyan-300 transition">Experience</a></li>
                <li><a href="#contact" className="hover:text-cyan-300 transition">Contact</a></li>
              </ul>
              <a
                href="#contact"
                className="mb-2 w-full text-center px-8 py-3 bg-cyan-300 text-black font-bold rounded-full hover:bg-cyan-400 transition-all duration-200 shadow-xl"
              >
                Get In Touch
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="home" className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center lg:justify-start">
              <div className="absolute -top-6 -left-3 w-28 h-28 rounded-full bg-cyan-400/20 blur-2xl"></div>
              <div className="absolute -bottom-8 right-2 w-32 h-32 rounded-full bg-pink-400/20 blur-2xl"></div>

              <div className="relative p-[3px] rounded-[2rem] bg-gradient-to-br from-cyan-400 via-violet-400 to-pink-400 shadow-2xl">
                <div className="rounded-[2rem] bg-slate-900/90 p-3">
                  <Image
                    src="/ishakUpdate.png"
                    alt="Ishak Abdiaziz - profile"
                    width={356}
                    height={356}
                    className="rounded-[1.5rem] object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="hidden sm:block absolute top-6 -right-2 md:right-8 px-4 py-2 rounded-full text-sm font-semibold bg-black/45 border border-white/15">
                Open To Work
              </div>
              <div className="hidden sm:block absolute -bottom-4 left-0 md:left-8 px-4 py-2 rounded-full text-sm font-semibold bg-black/45 border border-white/15">
                3+ Years Experience
              </div>
            </div>

            <div className="text-center lg:text-left">
              <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-cyan-300 font-medium mb-5">
                Full-Stack Web Developer
              </p>

              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] mb-5">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                  Building modern web
                </span>
                <br />
                <span className="text-white">experiences.</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                I am Ishak, a developer focused on creating clean interfaces and reliable backend systems with
                React, Next.js, Node.js, and TypeScript.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10">
                <a href="#work" className="w-full sm:w-auto text-center px-10 py-4 bg-white text-purple-700 font-bold rounded-full hover:scale-105 transition-all shadow-2xl">
                  View My Work
                </a>
                <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-cyan-300/60 text-cyan-200 font-semibold hover:bg-cyan-300/10 transition-all">
                  Download CV
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-5 max-w-xl mx-auto lg:mx-0">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-2xl font-bold text-cyan-300">25+</p>
                  <p className="text-sm text-gray-300">Projects</p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-2xl font-bold text-pink-300">15+</p>
                  <p className="text-sm text-gray-300">Clients</p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-2xl font-bold text-violet-300">100%</p>
                  <p className="text-sm text-gray-300">Commitment</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="container mx-auto px-6 pb-8">
          <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-cyan-300">About Me</h3>
            <p className="text-gray-300 md:text-lg">
              I build fast, scalable web apps from frontend design to backend APIs, with strong focus on performance and clean user experience.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                My Tech Stack
              </h3>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base md:text-lg">
                Technologies I use to design, build, and ship high-performance web applications.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {skills.map((skill) => (
                <article
                  key={skill.name}
                  className="group h-44 md:h-48 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-cyan-300/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                >
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-white">{skill.name}</h4>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="container mx-auto px-6 pb-8">
          <NextCon />
        </section>

        <section id="services" className="container mx-auto px-6 pb-8">
          <SecCon />
        </section>

        <section id="experience" className="container mx-auto px-6 pb-8">
          <ThirdCon />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </div>
    </>
  );
}
