'use client';

import React from 'react';
import Image from 'next/image';

const Identity: React.FC = () => {
  return (
    <section id="identity" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Brand Identity
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every element of Aura is designed to create an experience that feels magical, feminine, and transformative.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Color Palette */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-serif font-medium mb-4 text-gray-800">Color Palette</h3>
              <p className="text-gray-600 mb-6">
                Inspired by spiritual energy, feminine power, and natural transformation.
              </p>
              
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-[#9E7EB9]"></div>
                  <span className="text-gray-700">Spiritual Lavender</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-[#E6BBD3]"></div>
                  <span className="text-gray-700">Gentle Rose</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-[#F2C94C]"></div>
                  <span className="text-gray-700">Golden Intention</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-[#8ECAE6]"></div>
                  <span className="text-gray-700">Ethereal Blue</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Typography */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-serif font-medium mb-4 text-gray-800">Typography</h3>
              <p className="text-gray-600 mb-6">
                A balance of elegant serenity and grounded clarity.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Headers - Serif</p>
                  <p className="font-serif text-2xl">Elegant Transformation</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Body - Sans-serif</p>
                  <p className="text-base">Clear guidance for your spiritual journey</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Slogan */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-serif font-medium mb-4 text-gray-800">Slogan</h3>
              <p className="text-gray-600 mb-6">
                The emotional essence of our transformative approach.
              </p>
              
              <blockquote className="border-l-4 border-purple-400 pl-4 italic">
                <p className="text-xl font-serif mb-2">"Your habits shape your energy. Your energy shapes your destiny."</p>
              </blockquote>
            </div>
          </div>
          
          {/* Symbols */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-serif font-medium mb-4 text-gray-800">Visual Symbols</h3>
              <p className="text-gray-600 mb-6">
                Geometric and organic forms that represent transformation and flow.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-full bg-gradient-to-br from-purple-300 to-pink-200 flex items-center justify-center">
                  <div className="w-2/3 h-2/3 rounded-full border-2 border-white"></div>
                </div>
                <div className="aspect-square rounded-lg bg-gradient-to-tr from-amber-200 to-yellow-100 flex items-center justify-center">
                  <div className="w-2/3 h-2/3 rotate-45 border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tone of Voice */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-serif font-medium mb-4 text-gray-800">Tone of Voice</h3>
              <p className="text-gray-600 mb-6">
                How we communicate our spiritual guidance.
              </p>
              
              <ul className="space-y-2 text-gray-700">
                <li>• Warm and nurturing</li>
                <li>• Introspective and thoughtful</li>
                <li>• Empowering without being pushy</li>
                <li>• Mystical yet grounded</li>
                <li>• Poetic and evocative</li>
              </ul>
            </div>
          </div>
          
          {/* Mood */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-serif font-medium mb-4 text-gray-800">Mood</h3>
              <p className="text-gray-600 mb-6">
                The emotional experience we create.
              </p>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="relative aspect-square">
                  <Image src="https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg" alt="Calm water" layout="fill" objectFit="cover" className="rounded-md" />
                </div>
                <div className="relative aspect-square">
                  <Image src="https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg" alt="Sunset" layout="fill" objectFit="cover" className="rounded-md" />
                </div>
                <div className="relative aspect-square">
                  <Image src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg" alt="Crystal" layout="fill" objectFit="cover" className="rounded-md" />
                </div>
                <div className="relative aspect-square">
                  <Image src="https://images.pexels.com/photos/1727415/pexels-photo-1727415.jpeg" alt="Meditative space" layout="fill" objectFit="cover" className="rounded-md" />
                </div>
                <div className="relative aspect-square">
                  <Image src="https://images.pexels.com/photos/7677845/pexels-photo-7677845.jpeg" alt="Journal" layout="fill" objectFit="cover" className="rounded-md" />
                </div>
                <div className="relative aspect-square">
                  <Image src="https://images.pexels.com/photos/4210754/pexels-photo-4210754.jpeg" alt="Plants" layout="fill" objectFit="cover" className="rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;