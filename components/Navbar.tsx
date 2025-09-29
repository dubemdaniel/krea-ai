// app/components/Navbar.tsx
"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { MdHomeFilled, MdCellTower } from "react-icons/md";
import { FaRegImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { ImMagicWand } from "react-icons/im";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaChevronDown, FaFolder } from "react-icons/fa";
import KreaLogo from "@/assets/Logo";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="w-full flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <KreaLogo className="md:mr-4" />
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
        <div className="flex items-center gap-1 text-sm font-medium dark:text-white">
          Benevolent_Daniel
          <FaChevronDown size={12} />
        </div>
      </div>

      {/* Center Icons */}
      <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-xl">
        {[
          { icon: <MdHomeFilled size={16} />, active: true },
          { icon: <FaRegImage size={16} />, active: false },
          { icon: <FaVideo size={16} />, active: false },
          { icon: <ImMagicWand size={16} />, active: false },
          { icon: <HiMiniPaintBrush size={16} />, active: false },
          { icon: <MdCellTower size={16} />, active: false },
          { icon: <FaFolder size={16} />, active: false },
        ].map((item, index) => (
          <div
            key={index}
            className={`p-2 px-3 rounded-xl cursor-pointer transition-all duration-300 ease-in-out
        ${
          item.active
            ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
            : "text-gray-700 dark:text-white hover:bg-white hover:text-gray-900"
        }`}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Gallery
        </button>
        <button className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Support
        </button>
        <AiOutlineBell size={16} className="cursor-pointer dark:text-white" />

        {/* Dark/Light Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "light" ? (
              <FiMoon size={18} />
            ) : (
              <FiSun size={18} className="text-yellow-400" />
            )}
          </button>
        )}

        {/* Profile circle */}
        <div className="h-7 w-7 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
      </div>
    </nav>
  );
}
