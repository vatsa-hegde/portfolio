"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white/70 dark:bg-gray-900/70 backdrop-blur sticky top-0 z-50 transition-colors duration-500 ease-in-out">
      {/* Logo / Name */}
      <h1 className="text-lg md:text-xl font-bold text-indigo-600 dark:text-indigo-400">
        Shreevatsa Hegde
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 items-center">
        <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          Home
        </Link>
        <Link href="/experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          Experience
        </Link>
        <Link href="/education" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          Education
        </Link>
        <Link href="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          Projects
        </Link>
        <Link href="/resume" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          Resume
        </Link>
        <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          Contact
        </Link>
        <ThemeToggle />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-indigo-600 dark:text-indigo-400 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-40">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link href="/education" onClick={() => setIsOpen(false)}>Education</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
