"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-6"
      >
        Build Your Daily Learning Streak 🔥
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg mb-8 max-w-xl"
      >
        Stay consistent. Track your daily study habits and build
        unstoppable learning momentum.
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          href="/dashboard"
          className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
        >
          Start Tracking
        </Link>
      </motion.div>

    </div>
  )
}