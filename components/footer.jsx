'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white py-8 px-4 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">AI Career Coach</h2>
          <p className="text-sm text-gray-400 mt-1">Empowering your next move</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>

        {/* Socials */}
        <div className="flex space-x-4">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="hover:text-gray-400 transition-colors">
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AI Career Coach. All rights reserved.
      </div>
    </motion.footer>
  )
}
