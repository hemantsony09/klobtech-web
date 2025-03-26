import React from "react";

const ServiceCard = ({ title, description }) => (
  <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="relative">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full transform translate-y-2 opacity-75" />
    </div>
    <p className="text-gray-600 leading-relaxed mt-2">{description}</p>
  </div>
);

const ServicesShowcase = () => {
  const services = [
    {
      title: "Custom Mobile App Development",
      description:
        "We create tailor-made mobile applications for both iOS and Android platforms, designed to meet your unique business needs and deliver exceptional user experiences.",
    },
    {
      title: "Cross-Platform App Development",
      description:
        "Our expertise in cross-platform development ensures your app works seamlessly across multiple devices, saving time and costs while reaching a wider audience.",
    },
    {
      title: "Mobile UI/UX Design",
      description:
        "We focus on creating intuitive and visually appealing user interfaces and experiences that engage users and ensure smooth navigation on both iOS and Android apps.",
    },
    {
      title: "Mobile App Integration",
      description:
        "We integrate third-party APIs and services to enhance your mobile app's functionality, providing a seamless and feature-rich experience.",
    },
    {
      title: "App Maintenance & Support",
      description:
        "We provide ongoing support and maintenance for your mobile app, ensuring it remains up-to-date with the latest features, security updates, and bug fixes.",
    },
    {
      title: "Mobile App Testing & Quality Assurance",
      description:
        "We perform rigorous testing to ensure your mobile app is bug-free and optimized for performance across a variety of devices, reliable experience for users.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose KLobTech for Mobile App Development?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesShowcase;
