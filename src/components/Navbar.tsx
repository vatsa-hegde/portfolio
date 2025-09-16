"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white/70 dark:bg-gray-900/70 backdrop-blur sticky top-0 z-50 transition-colors duration-500 ease-in-out">
      <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
        Shreevatsa Hegde
      </h1>
      <div className="flex gap-6 items-center">
        <Link
          href="/"
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          Home
        </Link>
        <Link
          href="/experience"
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          Experience
        </Link>
        <Link
          href="/education"
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          Education
        </Link>
        <Link
          href="/projects"
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          Projects
        </Link>
        <Link
          href="/resume"
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          Resume
        </Link>
        <Link
          href="/contact"
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
