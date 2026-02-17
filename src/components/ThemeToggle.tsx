"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="p-2 rounded-full bg-gray-200 dark:bg-[var(--surface-elevated)] text-gray-900 dark:text-gray-100 hover:ring-2 hover:ring-indigo-500 transition-colors"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92, rotate: 15 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <motion.span
        key={theme}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </motion.span>
    </motion.button>
  );
}
