"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScanLine, FileSearch, ArrowRight, BookCheck } from "lucide-react";

export default function ResumeScannerPage() {
  return (
    <main className="min-h-screen bg-black-900 text-white p-8 flex flex-col items-center justify-center">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-blue-400 tracking-wide uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
      >
        SCAN. ANALYZE. LEVEL UP.
      </motion.h1>

      <motion.h1
        className="text-4xl md:text-2xl font-bold text-center mb-6 text-white-400"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        AI-Powered Resume Analyzer
      </motion.h1>

      <motion.p
        className="text-center max-w-xl text-zinc-300 mb-10 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Upload your resume and get instant AI-powered analysis on skills,
        experience, formatting, and more.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full ">
        <div className="hover:shadow-blue-500/50 hover:shadow-lg hover:border-blue-500">
          <ResumeFeature
            icon={<ScanLine className="w-10 h-10 text-blue-400" />}
            title="Smart Parsing"
            description="Extracts data using ML to identify name, contact, skills, and experience."
          />
        </div>
        <div className="hover:shadow-blue-500/50 hover:shadow-lg hover:border-blue-500">
          <ResumeFeature
            icon={<FileSearch className="w-10 h-10 text-yellow-400" />}
            title="Category Detection"
            description="Categorizes resume into relevant domains like Software, HR, Marketing, etc."
          />
        </div>
        <div className="hover:shadow-blue-500/50 hover:shadow-lg hover:border-blue-500">
          <ResumeFeature
            icon={<BookCheck className="w-10 h-10 text-green-400" />}
            title="Visual Summary"
            description="Presents the resume structure with visual insights and recommendations."
          />
        </div>
      </div>

      <a href="https://resume-scanner-kf3w.onrender.com" target="_blank">
        <Button className="mt-10 px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 shadow-lg rounded-xl transition">
          Try Resume Scanner <ArrowRight size={18} />
        </Button>
      </a>
    </main>
  );
}

function ResumeFeature(props) {
  const { icon, title, description } = props;

  return (
    <motion.div
      className="bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-zinc-700 hover:border-blue-500 text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-sm text-zinc-400">{description}</p>
    </motion.div>
  );
}
