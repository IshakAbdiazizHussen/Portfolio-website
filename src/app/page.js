
import Image from "next/image";
import { Type, RectangleEllipsis, Layers, Server, Database, Globe, Paintbrush, Code2, } from "lucide-react";        
import NextCon from "../MIN-CON/NextCon";
import SecCon from "../Sec-Con/SecCon";
import ThirdCon from "@/ThirdCon/ThirdCon";
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Navigation */}
        <header className="container mx-auto px-6 py-8 sticky top-0 z-50">
          <nav className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              I.Dev
            </h1>

            <ul className="flex flex-col sm:flex-row gap-8 text-lg font-medium">
              <li className="hover:text-cyan-300 transition cursor-pointer">Home</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">About</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Services</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Contact</li>  
            </ul>

            <button className="px-8 py-3 bg-cyan-300 text-black font-bold rounded-full hover:bg-cyan-400 hover:scale-105 transition-all duration-200 shadow-xl">
              Get In Touch
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          {/* Text - Centered on all devices */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hello, I am Ishak
              </span>
            </h2>

            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-cyan-300 bg-clip-text text-transparent mb-8">
              Full-Stack Web Developer
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
              I'm a passionate Full-Stack Web Developer with expertise in building modern, scalable,
              <br className="hidden md:block" />
              and user-centric web applications from concept to deployment. Proficient in JavaScript/TypeScript, React, Next.js, Node.js, Express.
            </p>

            <div className="flex justify-center">
              <button className="px-10 py-4 bg-white text-purple-600 font-bold rounded-full hover:scale-105 transition-all shadow-2xl">
                View My Work
              </button>
            </div>
        </div>

              

      </section>
        {/* Tech Stack */}
        <section className="container mx-auto px-6 py-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            My Tech Stack
          </h3>

          <div className="grid grid-cols sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-10 justify-items-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group  items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 
                         hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
              >
                <div className="group-hover:scale-125 group-hover:-translate-y-2 transition-all duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm md:text-base font-medium opacity-90 text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 container mx-auto px-6 py-10 text-center text-gray-400 text-sm">

        </footer>

        <NextCon />
        <SecCon />
        <ThirdCon />
        <Footer />
      </div>
    </>
  );
}