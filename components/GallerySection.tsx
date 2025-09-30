import React from 'react';
import { FaMoneyCheck } from "react-icons/fa6";
import { HiClipboardDocumentList } from "react-icons/hi2";


const GallerySection = () => {
  return (
    <section className="  py-6">
      <div className="max-w-[1600px] mx-auto px-2">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Gallery</h2>
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors dark:bg-gray-800 p-1 px-3 rounded-xl bg-gray-100">
              <HiClipboardDocumentList className="w-4 h-4" />
              <span>Legal</span>
            </button>
            <button className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors dark:bg-gray-800 p-1 px-3 rounded-xl bg-gray-100">
              <FaMoneyCheck className="w-4 h-4" />
              <span>Pricing</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;