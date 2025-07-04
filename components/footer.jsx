"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Mail, Rss, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white py-12 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-white text-black text-center flex justify-center items-center">
            {" "}
            <Image
              src="/favicon.png"
              width={40}
              height={40}
              alt="Favicon"
            />{" "}
            Nextstep-AI
          </h2>
          <p className="text-gray-400 text-sm">
            Empowering your next move with AI-driven career guidance.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Guides
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://ai-interview-01.vercel.app"
              aria-label="Webite"
              target="_blank"
              className="hover:text-gray-400 transition"
            >
              <Rss className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="hover:text-gray-400 transition"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/rudranarayan-sahu-b7b9a6244/"
              aria-label="LinkedIn"
              className="hover:text-gray-400 transition"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:rudranarayansahu.tech@gmail.com"
              aria-label="Email"
              className="hover:text-gray-400 transition"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
          <div className="container py-3 mx-auto text-gray-200">
            <p>
              Made with love by{" "}
              <Link
                target="_blank"
                className="text-blue-300"
                href={"https://rudranarayan.vercel.app"}
              >
                Rudranarayan Sahu
              </Link>
            </p>
            <div className="flex flex-col py-3 ">
              <div className="flex gap-1 py-2">
                <PhoneCall />
                <p>+91 8260348599</p>
              </div>
              <div className="flex py-2 gap-1">
                <MapPin />
                <p>Bhubaneswar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nextstep-AI. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
