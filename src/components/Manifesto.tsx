'use client';

import React from 'react';
import Image from 'next/image';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-300 via-pink-300 to-amber-200 opacity-30 blur-xl"></div>
              <div className="relative w-full aspect-square">
                <Image 
                  src="https://images.pexels.com/photos/3872943/pexels-photo-3872943.jpeg"
                  alt="Woman in meditation"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              The Aura Manifesto
            </h2>
            
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="italic text-xl mb-6 leading-relaxed">
                "We believe in the quiet power of small, daily actions to transform your entire being."
              </p>
              
              <p className="mb-4">
                In a world of noise and distraction, true transformation happens in moments of presence and intention.
              </p>
              
              <p className="mb-4">
                Every spiritual habit you cultivate is a whispered promise to your future self — a commitment to becoming who you were always meant to be.
              </p>
              
              <p className="mb-4">
                Your unique energy — your Aura — is shaped by these moments of conscious choice, day after day.
              </p>
              
              <p className="font-medium">
                We don't just track habits. We honor the sacred journey of becoming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;