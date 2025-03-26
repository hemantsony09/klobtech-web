import React from 'react';
import { Target, Rocket } from 'lucide-react';

const Vision = () => {
  return (
    <section id="vision-&-mission" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Vision & Mission</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Target className="text-blue-600 mb-6 mx-auto" size={48} />
            <h3 className="text-2xl font-bold text-center mb-4">Our Vision</h3>
            <p className="text-gray-600 text-center">
              KLobTech envisions being your key to success, providing top-notch software and web services 
              with a focus on quality and efficiency. We prioritize timely deliveries without compromising 
              excellence, aiming to significantly enhance your business value.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Rocket className="text-blue-600 mb-6 mx-auto" size={48} />
            <h3 className="text-2xl font-bold text-center mb-4">Our Mission</h3>
            <p className="text-gray-600 text-center">
              Our mission is to consistently exceed your expectations. We empower our team to deliver 
              superior performance, foster an environment of growth, and accelerate your business's pace. 
              Your success is not just a goal; it's our heartfelt commitment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;