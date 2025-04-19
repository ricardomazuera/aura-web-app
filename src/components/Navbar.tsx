'use client';

import React, { useState } from 'react';
import { SunMoon } from 'lucide-react';
import Link from 'next/link';
import WorkInProgressModal from './WorkInProgressModal';

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-20 bg-opacity-80 backdrop-blur-sm bg-white/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <SunMoon className="h-6 w-6 text-indigo-600" />
            <span className="text-2xl font-serif font-medium bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              aura
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#manifesto" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">
              Manifesto
            </Link>
            <Link href="#identity" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">
              Identity
            </Link>
            <Link href="#aura" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">
              Your Aura
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity duration-300"
            >
              Begin Journey
            </button>
          </div>
        </div>
      </nav>
      
      <WorkInProgressModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;