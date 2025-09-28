import React from 'react';
import { 
  Image, Video, Sparkles, Zap, Edit3, Mic, 
  RotateCcw, Target, ExternalLink 
} from 'lucide-react';

const GenerateToolsGrid = () => {
  const generateTools = [
    {
      id: 1,
      icon: <Image className="w-4 h-4" />,
      title: "Image",
      subtitle: "NEW",
      description: "Generate images with custom styles in PNG and WebP/gen.",
      action: "Open",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconBg: "bg-purple-600 dark:bg-purple-500"
    },
    {
      id: 2,
      icon: <Video className="w-4 h-4" />,
      title: "Video",
      description: "Generate videos with Haiku, Pika, Runway, LumaI, and more.",
      action: "Open",
      bgColor: "bg-orange-50 dark:bg-orange-900/20", 
      iconBg: "bg-orange-500 dark:bg-orange-400"
    },
    {
      id: 3,
      icon: <Sparkles className="w-4 h-4" />,
      title: "Realtime",
      description: "Realtime AI rendering on a canvas. Paint feedback loops.",
      action: "Open",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-blue-500 dark:bg-blue-400"
    },
    {
      id: 4,
      icon: <Zap className="w-4 h-4" />,
      title: "Enhancer", 
      subtitle: "NEW",
      description: "Upscale and enhance images and videos up to 20x.",
      action: "Open",
      bgColor: "bg-gray-900 dark:bg-gray-800",
      iconBg: "bg-gray-700 dark:bg-gray-600",
      isDark: true
    },
    {
      id: 5,
      icon: <Edit3 className="w-4 h-4" />,
      title: "Edit",
      subtitle: "NEW",
      description: "Add objects, change style, or expand photos and generations.",
      action: "Open",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconBg: "bg-purple-600 dark:bg-purple-500"
    },
    {
      id: 6,
      icon: <Mic className="w-4 h-4" />,
      title: "Video Lipsync",
      subtitle: "NEW",
      description: "Lip sync any video and audio. Generate realistic mouth movements.", 
      action: "Open",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconBg: "bg-green-600 dark:bg-green-500"
    },
    {
      id: 7,
      icon: <RotateCcw className="w-4 h-4" />,
      title: "Motion Transfer",
      subtitle: "NEW", 
      description: "Transfer motion to images and animate characters.",
      action: "Open",
      bgColor: "bg-gray-900 dark:bg-gray-800",
      iconBg: "bg-gray-700 dark:bg-gray-600",
      isDark: true
    },
    {
      id: 8,
      icon: <Target className="w-4 h-4" />,
      title: "Train",
      description: "Teach Krea to replicate your style, products, or characters.",
      action: "Open",
      bgColor: "bg-gray-50 dark:bg-gray-800/50",
      iconBg: "bg-gray-500 dark:bg-gray-400"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Generate</h2>
        <button className="text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 flex items-center gap-1 transition-colors">
          <span>Show all</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>

      {/* Tools Grid - 2 rows x 4 columns */}
      <div className="grid grid-cols-4 gap-3">
        {generateTools.map((tool) => (
          <div
            key={tool.id}
            className={`${tool.bgColor} rounded-lg p-4 hover:scale-[1.02] transition-all duration-200 cursor-pointer group`}
          >
            {/* Header with Icon and Action */}
            <div className="flex items-center justify-between mb-3">
              <div className={`w-7 h-7 ${tool.iconBg} rounded-md flex items-center justify-center text-white`}>
                {tool.icon}
              </div>
              <button className="text-xs font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                {tool.action}
              </button>
            </div>
            
            {/* Title Row */}
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {tool.title}
              </h3>
              {tool.subtitle && (
                <span className="bg-blue-500 dark:bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded font-medium">
                  {tool.subtitle}
                </span>
              )}
            </div>
            
            {/* Description */}
            <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateToolsGrid;