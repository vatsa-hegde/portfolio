"use client";

import Navbar from "@/components/Navbar";
import { ThemeContextProvider } from "@/contexts/ThemeContext";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <Navbar />
      {children}
    </ThemeContextProvider>
  );
}
