import { useState } from "react";

// Individual Card Component
const Card = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[310px] h-[330px] bg-white rounded-lg shadow-lg overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Section (30% height) */}
      <div className="h-[99px] bg-gray-200 flex items-center justify-center">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      {/* Bottom Section (70% height) */}
      <div className="h-[231px] bg-gray-100 flex items-center justify-center relative overflow-hidden">
        <p className="text-center px-4">{description}</p>

        <div
          className={`absolute bottom-0 left-0 w-full h-full bg-white flex items-center justify-center transform transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          Hover Details
        </div>
      </div>
    </div>
  );
};

// Card Grid Component
const CardGrid = () => {
  // Sample data for cards
  const cardData = [
    {
      title: "Card 1",
      description:
        "This is the description for Card 1. It provides some additional context about the card's purpose.",
    },
    {
      title: "Card 2",
      description:
        "Learn more about the unique features of Card 2 and its potential applications.",
    },
    {
      title: "Card 3",
      description:
        "Explore the innovative details and insights contained within Card 3.",
    },
    {
      title: "Card 4",
      description: "Discover the interesting aspects and background of Card 4.",
    },
    {
      title: "Card 5",
      description:
        "Dive into the comprehensive information presented in Card 5.",
    },
    {
      title: "Card 6",
      description: "Uncover the depth and richness of content in Card 6.",
    },
    {
      title: "Card 7",
      description: "Examine the unique perspective offered by Card 7.",
    },
    {
      title: "Card 8",
      description: "Investigate the details and nuances of Card 8.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardGrid;
