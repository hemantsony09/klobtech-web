import React from 'react';
import { Phone, Globe, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'PHONE NUMBER',
      value: '+91 9024790200',
      href: 'tel:+919024790200',
    },
    {
      icon: Globe,
      title: 'WEBSITE',
      value: 'www.klobtech.com',
      href: 'https://www.klobtech.com',
    },
    {
      icon: Mail,
      title: 'E-MAIL ADDRESS',
      value: 'info@klobtech.com',
      href: 'mailto:info@klobtech.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {contactInfo.map(({ icon: Icon, title, value, href }) => (
            <a
              key={title}
              href={href}
              className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Icon className="text-blue-600 mb-4" size={32} />
              <h3 className="text-sm font-semibold text-gray-600 mb-2">{title}</h3>
              <p className="text-lg font-bold text-gray-800">{value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;