import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 text-white pt-16">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          WELCOME TO KLOBTECH
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Unleashing the power of the latest web and mobile technologies, we passionately build, foster,
          and fortify your business, ensuring a dynamic and resilient online presence.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors"
        >
          Get Started
          <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
    </div>
  );
};

export default Hero;