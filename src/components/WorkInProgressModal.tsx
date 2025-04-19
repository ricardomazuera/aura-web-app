'use client';

import React from 'react';
import { X } from 'lucide-react';

interface WorkInProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorkInProgressModal: React.FC<WorkInProgressModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl p-8 w-full max-w-md mx-4 z-50 transform translate-y-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center">
          <h3 className="text-2xl font-serif font-medium mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Coming Soon
          </h3>
          <p className="text-gray-600 text-lg">
            We are working hard to create the application. Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgressModal;