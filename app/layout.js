'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full bg-black text-white py-10 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Logo & Title */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-wide">AI Career Coach</h2>
          <p className="text-sm text-gray-400 mt-1">Your smart guide to career success</p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-400 transition">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400 transition">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-gray-400 transition">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Mail" className="hover:text-gray-400 transition">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} AI Career Coach. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
