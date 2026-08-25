"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./icons";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = stored === "dark" || stored === "light" ? stored : prefersDark ? "dark" : "light";
      setTheme(initial as "light" | "dark");
      document.documentElement.setAttribute("data-theme", initial);
    } catch {
      /* storage unavailable — fall back to light */
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="flex size-[18px] items-center justify-center text-text-primary transition-opacity hover:opacity-60"
    >
      {mounted && theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
