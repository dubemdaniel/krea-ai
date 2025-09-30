"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { AiOutlineBell } from "react-icons/ai";
import {
  MdHomeFilled,
  MdCellTower,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { FaRegImage, FaChevronDown, FaFolder, FaVideo } from "react-icons/fa6";
import { ImMagicWand } from "react-icons/im";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { FiSun, FiMoon } from "react-icons/fi";
import KreaLogo from "@/assets/Logo";
import { PiHeadsetBold } from "react-icons/pi";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="w-full flex items-center justify-between px-4 py-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <KreaLogo className="md:mr-4" />
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
        <div className="hidden md:flex items-center gap-1 text-sm font-medium dark:text-white">
          Benevolent_Daniel
          <FaChevronDown size={12} />
        </div>
      </div>

      {/* Desktop Center Icons */}
      <div className="hidden md:flex items-center gap-3 bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-xl">
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
            className={`p-2 px-3 rounded-xl cursor-pointer transition-all duration-100 ease-in-out
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

      {/* Right Section (Desktop) */}
      <div className="hidden md:flex items-center gap-3">
        <button
          className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 
    px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-100"
        >
          <FaRegImage size={14} /> Gallery
        </button>

        <button
          className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 
    px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-100"
        >
          <PiHeadsetBold size={14} /> Support
        </button>

        <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer">
          <AiOutlineBell size={16} className="dark:text-white" />
        </div>

        {/* Dark/Light Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
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

      {/* Mobile Hamburger */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-md md:hidden z-50">
          <div className="flex flex-col p-4 gap-4">
            {/* Center Icons */}
            <div className="flex items-center justify-center gap-3 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl">
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

            {/* Links */}
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              <FaRegImage size={14} /> Gallery
            </button>
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              <PiHeadsetBold size={14} /> Support
            </button>

            <div className="flex items-center justify-between">
              <AiOutlineBell
                size={18}
                className="cursor-pointer dark:text-white"
              />

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
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
