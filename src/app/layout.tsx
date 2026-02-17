import type { Metadata } from "next";
import "./globals.css";
import LayoutClient from "./LayoutClient";

export const metadata: Metadata = {
  title: "Shreevatsa Ganapathy Hegde | Software Engineer & Researcher",
  description:
    "Software Engineer & Researcher passionate about distributed systems and cloud computing. Building scalable web applications and exploring AI-driven, cloud-native projects.",
  openGraph: {
    title: "Shreevatsa Ganapathy Hegde | Software Engineer & Researcher",
    description:
      "Software Engineer & Researcher passionate about distributed systems and cloud computing.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem("theme");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var theme=t||(d?"dark":"light");document.documentElement.classList.toggle("dark",theme==="dark");})();`,
          }}
        />
      </head>
      <body className="text-[var(--foreground)] transition-colors duration-500 min-h-screen">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
