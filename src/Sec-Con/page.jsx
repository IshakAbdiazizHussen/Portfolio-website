import React from 'react';

export default function SecCon() {
  return (
    <div className="p-10 mt-20">
      {/* Title */}
      <h3 className="bg-gradient-to-r from-sky-300 to-white bg-clip-text text-transparent text-center text-4xl md:text-5xl font-bold">
        My Quality Services
      </h3>

      {/* Subtitle */}
      <p className="text-xl  text-white/90 mt-8 text-center max-w-4xl mx-auto leading-relaxed">
        I build fast, modern, and scalable web applications using React, Next.js, Node.js, and MongoDB.
        <br className="hidden md:inline" /> From beautiful frontends to powerful backends — I deliver complete solutions that perform, convert, and grow with your vision.
      </p>

      {/* Services List */}
      <section className="mt-20 space-y-6">
        {/* Service 01 */}
        <div className="w-full max-w-5xl mx-auto px-8 md:px-10 py-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex 
          flex-col md:flex-row items-center justify-between text-white shadow-2xl hover:shadow-purple-500/50 transition">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <span className="text-2xl md:text-3xl font-bold">01</span>
            <h4 className="text-xl md:text-2xl font-bold">Web Development</h4>
          </div>

          <p className="text-sm md:text-base text-white/80 text-center md:text-left max-w-md px-4">
            Modern, fast, responsive websites & web apps built with React, Next.js, and Tailwind CSS — pixel-perfect on every device.
          </p>

          <span className="text-3xl mt-4 md:mt-0">→</span>
        </div>

        {/* Service 02 */}
        <div className="w-full max-w-5xl mx-auto px-8 md:px-10 py-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex flex-col md:flex-row items-center justify-between text-white shadow-2xl hover:shadow-purple-500/50 transition">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <span className="text-2xl md:text-3xl font-bold">02</span>
            <h4 className="text-xl md:text-2xl font-bold">Full-Stack Solutions</h4>
          </div>

          <p className="text-sm md:text-base text-white/80 text-center md:text-left max-w-md px-4">
            End-to-end development — from database design to stunning UI. One developer, full control, zero compromises.
          </p>

          <span className="text-3xl mt-4 md:mt-0">→</span>
        </div>

        {/* Service 03 */}
        <div className="w-full max-w-5xl mx-auto px-8 md:px-10 py-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex flex-col md:flex-row items-center justify-between text-white shadow-2xl hover:shadow-purple-500/50 transition">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <span className="text-2xl md:text-3xl font-bold">03</span>
            <h4 className="text-xl md:text-2xl font-bold">API & Backend</h4>
          </div>

          <p className="text-sm md:text-base text-white/80 text-center md:text-left max-w-md px-4">
                Secure, scalable REST & GraphQL APIs with Node.js, Express, and MongoDB — built to grow with your traffic.
          </p>

          <span className="text-3xl mt-4 md:mt-0">→</span>
        </div>

        {/* Service 04 */}
        <div className="w-full max-w-5xl mx-auto px-8 md:px-10 py-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex flex-col md:flex-row items-center justify-between text-white shadow-2xl hover:shadow-purple-500/50 transition">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <span className="text-2xl md:text-3xl font-bold">04</span>
            <h4 className="text-xl md:text-2xl font-bold">Maintenance & Support</h4>
          </div>

          <p className="text-sm md:text-base text-white/80 text-center md:text-left max-w-md px-4">
            Ongoing updates, bug fixes, performance optimization, and 24/7 support — your app stays perfect forever.
          </p>

          <span className="text-3xl mt-4 md:mt-0">→</span>
        </div>
      </section>
    </div>
  );
}