'use client';

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import WorkInProgressModal from './WorkInProgressModal';

const AuraVisual = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="aura" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Your Unique Aura
              </h2>
              
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-4">
                  After 7 days of consistent practice, witness the manifestation of your energy as a unique, personalized Aura.
                </p>
                
                <p className="mb-4">
                  This visual representation reflects your spiritual journey, capturing the essence of your commitment and transformation.
                </p>
                
                <p className="mb-6">
                  No two Auras are alike — each is as unique as the soul that created it.
                </p>
                
                <div className="flex items-center">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    <span>Start Your 7-Day Journey</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-pink-200 to-amber-100 rounded-full blur-3xl opacity-50"></div>
                <div className="relative">
                  <div className="w-full aspect-square rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-purple-400/40 to-pink-300/40 animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5/6 h-5/6 rounded-full bg-gradient-to-tl from-purple-300/80 via-pink-200/80 to-amber-100/80 animate-spin-slow"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-blue-300/60 via-purple-200/60 to-pink-100/60 animate-reverse-spin-slow"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1/2 h-1/2 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center">
                        <Sparkles className="h-8 w-8 text-indigo-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkInProgressModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default AuraVisual;