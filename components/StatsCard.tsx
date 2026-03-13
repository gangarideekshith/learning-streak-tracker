"use client"

import { motion } from "framer-motion"

type Props = {
  title: string
  value: string | number
}

export default function StatsCard({ title, value }: Props) {
  return (

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-md p-6 transition"
    >

      <h2 className="text-gray-500 text-sm">
        {title}
      </h2>

      <p className="text-4xl font-bold mt-2">
        {value}
      </p>

    </motion.div>

  )
}