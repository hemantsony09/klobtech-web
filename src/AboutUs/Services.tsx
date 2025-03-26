import React from 'react';
import { Smartphone, Globe, ShoppingBag } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'MOBILE APP',
      description: 'KLobTech is a top mobile app development company, dedicated to delivering high-quality, customer-focused solutions on time and within budget.',
    },
    {
      icon: Globe,
      title: 'WEB DEVELOPMENT',
      description: 'We specialize in delivering high-quality, secure, and cost-effective web development services, ensuring user-friendly solutions for businesses worldwide.',
    },
    {
      icon: ShoppingBag,
      title: 'CMS',
      description: 'At KLobtech, we provide a range of e-commerce development services tailored to meet all the requirements of the e-commerce sector.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Icon className="mx-auto mb-6 text-blue-600" size={48} />
              <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
              <p className="text-gray-600 text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;