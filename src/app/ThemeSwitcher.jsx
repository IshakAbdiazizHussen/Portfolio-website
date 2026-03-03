"use client";

import { useEffect, useState } from "react";

const THEMES = ["default", "dark", "light"];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const saved = localStorage.getItem("site-theme");
    const initial = THEMES.includes(saved) ? saved : "default";
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);

  function applyTheme(nextTheme) {
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("site-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <div className="flex items-center gap-2">
      {THEMES.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => applyTheme(item)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${
            theme === item
              ? "bg-cyan-300 text-black border-cyan-300"
              : "bg-black/20 text-white border-white/25 hover:bg-white/10"
          }`}
        >
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
}

