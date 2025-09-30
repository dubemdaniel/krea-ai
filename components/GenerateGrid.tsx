import React from "react";
import { Target } from "lucide-react";
import { MdCellTower } from "react-icons/md";
import { PiMicrophoneStageFill } from "react-icons/pi";
import DropdownHeader from "./DropdownHeader";
import { ImMagicWand } from "react-icons/im";
import { FaVideo, FaRegImage } from "react-icons/fa6";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { BsPersonStandingDress } from "react-icons/bs";

const GenerateToolsGrid = () => {
  const generateTools = [
    {
      id: 1,
      icon: <FaRegImage className="w-4 h-4" />,
      title: "Image",
      subtitle: "NEW",
      description: "Generate images with custom styles in PNG and WebP/gen.",
      action: "Open",
      bgColor: "bg-gray-50 dark:bg-gray-800/50",
      iconGradient: "from-gray-500 to-gray-500/20 dark:from-gray-400 dark:to-gray-400/20",
    },
    {
      id: 2,
      icon: <FaVideo className="w-4 h-4" />,
      title: "Video",
      description: "Generate videos with Haiku, Pika, Runway, LumaI, and more.",
      action: "Open",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      iconGradient: "from-yellow-500 to-yellow-500/20 dark:from-yellow-400 dark:to-yellow-400/20",
    },
    {
      id: 3,
      icon: <HiMiniPaintBrush className="w-4 h-4" />,
      title: "Realtime",
      description: "Realtime AI rendering on a canvas. Paint feedback loops.",
      action: "Open",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconGradient: "from-blue-400 to-blue-400/20 dark:from-blue-400 dark:to-blue-400/20",
    },
    {
      id: 4,
      icon: <ImMagicWand className="w-4 h-4" />,
      title: "Enhancer",
      subtitle: "NEW",
      description: "Upscale and enhance images and videos up to 20x.",
      action: "Open",
      bgColor: "bg-gray-50 dark:bg-gray-800/50",
      iconGradient: "from-gray-500 to-gray-500/20 dark:from-gray-400 dark:to-gray-400/20",
    },
    {
      id: 5,
      icon: <MdCellTower className="w-4 h-4" />,
      title: "Edit",
      subtitle: "NEW",
      description:
        "Add objects, change style, or expand photos and generations.",
      action: "Open",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconGradient: "from-purple-600 to-purple-600/20 dark:from-purple-500 dark:to-purple-500/20",
    },
    {
      id: 6,
      icon: <PiMicrophoneStageFill className="w-4 h-4" />,
      title: "Video Lipsync",
      subtitle: "NEW",
      description:
        "Lip sync any video and audio.",
      action: "Open",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconGradient: "from-green-600 to-green-600/20 dark:from-green-500 dark:to-green-500/20",
    },
    {
      id: 7,
      icon: <BsPersonStandingDress className="w-4 h-4" />,
      title: "Motion Transfer",
      subtitle: "NEW",
      description: "Transfer motion to images and animate characters.",
      action: "Open",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconGradient: "from-gray-800 to-gray-800/20 dark:from-gray-600 dark:to-gray-600/20",
    },
    {
      id: 8,
      icon: <Target className="w-4 h-4" />,
      title: "Train",
      description:
        "Teach Krea to replicate your style, products, or characters.",
      action: "Open",
      bgColor: "bg-gray-50 dark:bg-gray-800/50",
      iconGradient: "from-gray-500 to-gray-500/20 dark:from-gray-400 dark:to-gray-400/20",
    },
  ];

  return (
    <div>
      {/* Section Header */}
      <DropdownHeader />

      {/* Responsive Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-1">
        {generateTools.map((tool) => (
          <div
            key={tool.id}
            className="rounded-lg py-4 px-2 hover:scale-[1.02] transition-all duration-200 cursor-pointer group"
          >
            {/* Header with Icon and Action */}
            <div className="flex items-center justify-between mb-3">
              {/* Icon with Gradient Background */}
              <div
                className={`flex-shrink-0 w-10 h-10 bg-gradient-to-b ${tool.iconGradient} rounded-lg flex items-center justify-center text-white`}
              >
                {tool.icon}
              </div>

              {/* Title + Description text*/}
              <div className="ml-1.5 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xs font-semibold text-gray-900 dark:text-gray-100">
                    {tool.title}
                  </h3>
                  {tool.subtitle && (
                    <span className="bg-blue-500 dark:bg-blue-600 text-white text-[9px] px-1.5 py-0.5 rounded-2xl font-medium">
                      {tool.subtitle}
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-gray-500 dark:text-gray-300">
                  {tool.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="bg-gray-100 px-3 py-1.5 rounded-3xl flex dark:bg-gray-800 ml-2">
                <button className="text-xs font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                  {tool.action}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateToolsGrid;