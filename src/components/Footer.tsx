'use client';

import React, { useState, FormEvent } from 'react';
import { SunMoon } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Submit the form in a new tab
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formspree.io/f/mblgvnvn';
    form.target = '_blank';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.value = email;

    form.appendChild(emailInput);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    // Clear the input and show success message
    setEmail('');
    setIsSubmitted(true);
    
    // Reset the success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <SunMoon className="h-5 w-5 text-indigo-600" />
              <span className="text-xl font-serif font-medium bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                aura
              </span>
            </Link>
            <p className="text-gray-500 mt-2 text-sm max-w-xs">
              Transform your energy through daily rituals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300">Home</Link></li>
                <li><Link href="#manifesto" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300">Manifesto</Link></li>
                <li><Link href="#identity" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300">Brand</Link></li>
                <li><Link href="#aura" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300">Your Aura</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Connect</h4>
              <ul className="space-y-2">
                <li><Link href="https://x.com/ricardomazuera_" target="_blank" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300">X - Twitter</Link></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1 mt-6 md:mt-0">
              <h4 className="font-medium text-gray-800 mb-3">Stay Connected</h4>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex">
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Your email"
                    className="px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent w-full"
                  />
                  <button 
                    type="submit"
                    className="px-4 py-2 rounded-r-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity duration-300"
                  >
                    Join
                  </button>
                </div>
                {isSubmitted && (
                  <p className="text-green-600 text-sm mt-2">
                    Thank you for subscribing!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;