import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Cakegift Website',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
      description: 'E-commerce platform for ordering cakes, flowers, and gifts.',
    },
    {
      id: 2,
      title: 'Sugaroot Website',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      description: 'Engaging e-commerce platform focusing on user experience and sales growth.',
    },
    {
      id: 3,
      title: 'KNOBCO Website',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
      description: 'User-friendly e-commerce platform for hardware and accessories.',
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Project Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm opacity-90">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;