import React from 'react';
import { Target, Rocket, Users, Lightbulb, HeartHandshake, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Feature = ({ icon: Icon, title, description }: FeatureProps) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <Icon className="text-blue-600 mb-4" size={32} />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const VisionAndWhyUs = () => {
  const features = [
    {
      icon: Target,
      title: "Precision and Understanding",
      description: "We decode your business needs accurately, ensuring customized solutions aligned with your goals."
    },
    {
      icon: HeartHandshake,
      title: "Accessible and Trustworthy",
      description: "Open communication builds trust. We're always accessible, fostering transparency and long-term partnerships."
    },
    {
      icon: Lightbulb,
      title: "Innovation and Quality",
      description: "Setting industry standards, our solutions are not only of the highest quality but also at the forefront of innovation."
    },
    {
      icon: Users,
      title: "Dedicated Professionals",
      description: "Our skilled and dedicated teams are goal-oriented, ensuring satisfactory results that elevate your business."
    },
    {
      icon: Rocket,
      title: "Mission-Driven Services",
      description: "We are more than a service provider; we're your web development partner with a clear mission and vision."
    },
    {
      icon: Shield,
      title: "Ethical Work Ethos",
      description: "Dignity, respect, and ethical practices define our work culture, fostering strong client relationships and employee development."
    }
  ];

  return (
    <>
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

      <section id="why-choose-us" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Feature key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionAndWhyUs;