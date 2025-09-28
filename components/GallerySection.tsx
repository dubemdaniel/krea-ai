import React from 'react';
import { Scale, DollarSign } from 'lucide-react';

const GallerySection = () => {
  return (
    <section className=" border-t border-gray-200 dark:border-gray-800 pt-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Gallery</h2>
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
              <Scale className="w-4 h-4" />
              <span>Legal</span>
            </button>
            <button className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
              <DollarSign className="w-4 h-4" />
              <span>Pricing</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;