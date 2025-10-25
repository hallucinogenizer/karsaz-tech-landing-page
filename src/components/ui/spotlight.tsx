"use client";

import { motion } from "framer-motion";

export default function Spotlight() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-1/2 left-1/4 h-[500px] w-[500px] rounded-full bg-linear-to-r from-blue-500/30 to-purple-500/30 blur-3xl" />
      <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-linear-to-r from-purple-500/30 to-pink-500/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] rounded-full bg-linear-to-r from-pink-500/30 to-blue-500/30 blur-3xl" />
    </motion.div>
  );
}

