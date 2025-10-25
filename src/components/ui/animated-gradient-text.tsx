"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={cn(
        "bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

