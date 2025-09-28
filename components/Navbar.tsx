// app/components/Navbar.tsx
"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import {
  AiOutlineHome,
  AiOutlinePicture,
  AiOutlineVideoCamera,
  AiOutlineHighlight,
  AiOutlineEdit,
  AiOutlineFolder,
  AiOutlineBell,
} from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="w-full flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
        <div className="flex items-center gap-1 text-sm font-medium dark:text-white">
          benevolentrainbilocat
          <FaChevronDown size={12} />
        </div>
      </div>

      {/* Center Icons */}
      <div className="flex items-center gap-5 bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-full">
        <AiOutlineHome size={20} className="cursor-pointer dark:text-white" />
        <AiOutlinePicture size={20} className="cursor-pointer dark:text-white" />
        <AiOutlineVideoCamera size={20} className="cursor-pointer dark:text-white" />
        <AiOutlineHighlight size={20} className="cursor-pointer dark:text-white" />
        <AiOutlineEdit size={20} className="cursor-pointer dark:text-white" />
        <AiOutlineFolder size={20} className="cursor-pointer dark:text-white" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-gray-700 dark:text-gray-200">Gallery</button>
        <button className="text-sm font-medium text-gray-700 dark:text-gray-200">Support</button>
        <AiOutlineBell size={20} className="cursor-pointer dark:text-white" />

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
