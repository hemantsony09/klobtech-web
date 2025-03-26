import React from 'react';
import { Target, Users, Lightbulb, HeartHandshake, Rocket, Shield } from 'lucide-react';
import Feature from './Feature';

const WhyChooseUs = () => {
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
  );
};

export default WhyChooseUs;