import React from 'react'
import { Phone, Mail, MapPin, Code2, GraduationCap, Globe } from "lucide-react";

export default function Footer() {
  return (

    <footer className="container mx-auto px-6 py-16 text-center  border-t border-gray-700 mt-20">
        <h3 className="bg-gradient-to-r from-sky-300 to-white bg-clip-text text-transparent  
                                text-4xl md:text-5xl font-bold ">Contacts</h3>

        <div className="flex flex-col md:flex-row justify-around items-center gap-12 text-gray-300">

            {/* Contact Info */}
            <div className="space-y-6 text-lg">
            <div className="flex items-center justify-center md:justify-start gap-4">
                <Phone className="w-6 h-6 text-purple-400" />
                <p>+252 610 909 060</p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <p>ishakabdiaziz9060@gmail.com</p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
            <MapPin className="w-6 h-6 text-purple-400" />
            <p>Mogadishu, Somalia</p>
        </div>
        </div>

        {/* About Me */}
        <div className="space-y-6 text-lg">
        <div className="flex items-center justify-center md:justify-start gap-4">
            <Code2 className="w-6 h-6 text-purple-400" />
            <p>Full-Stack Web Developer</p>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-4">
            <GraduationCap className="w-6 h-6 text-purple-400" />
            <p>Studied: SIMAD University</p>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-4">
            <Globe className="w-6 h-6 text-purple-400" />
            <p>1 Year of Writing Code</p>
        </div>
        </div>
    </div>

    </footer>
  )
}
