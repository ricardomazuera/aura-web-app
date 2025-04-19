'use client';

import React from 'react';
import { Calendar, Award, RefreshCw, Sparkles, Heart } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            How Aura Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your journey to spiritual transformation in three simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3 text-gray-800">
              Create Your Habit
            </h3>
            <p className="text-gray-600">
              Choose a spiritual habit that resonates with your soul's journey — meditation, journaling, mindful eating, or create your own custom ritual.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-6">
              <RefreshCw className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3 text-gray-800">
              7 Days of Consistency
            </h3>
            <p className="text-gray-600">
              Commit to your practice for 7 consecutive days. Each day strengthens your energetic field and contributes to your transformation.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3 text-gray-800">
              Reveal Your Aura
            </h3>
            <p className="text-gray-600">
              Unlock your unique Aura — a visual representation of your energy that evolves as you continue your spiritual practice.
            </p>
          </div>
        </div>
        
        <div className="mt-16 pt-10 border-t border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-500" />
              <span className="text-gray-700">Completely intuitive</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-pink-500" />
              <span className="text-gray-700">Made with love</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-700">Web3 powered, invisibly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;