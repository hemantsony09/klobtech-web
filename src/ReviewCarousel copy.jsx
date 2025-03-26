import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Thompson",
    company: "TechInnovate Solutions",
    quote:
      "An exceptional service that transformed our approach to digital strategy. Their innovative solutions and deep understanding of our business challenges were truly remarkable. ",
    photo: "/api/placeholder/200/200?text=ST",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "Global Nexus Consulting",
    quote:
      "Unparalleled expertise and commitment to delivering outstanding results. From the initial consultation to the final implementation, their team demonstrated an incredible level of professionalism and technical prowess. ",
    photo: "/api/placeholder/200/200?text=MR",
  },
  {
    id: 3,
    name: "Emily Chen",
    company: "Quantum Dynamics Inc.",
    quote:
      "A game-changing partnership that exceeded all our expectations. Their strategic insights and cutting-edge approach have fundamentally reshaped our business model. ",
    photo: "/api/placeholder/200/200?text=EC",
  },
];

const ReviewCarousel = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeReview = (direction = "next") => {
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentReview((prev) => {
        if (direction === "next") {
          return (prev + 1) % reviews.length;
        } else {
          return (prev - 1 + reviews.length) % reviews.length;
        }
      });
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const autoAdvanceInterval = setInterval(() => {
      changeReview("next");
    }, 3000);

    return () => clearInterval(autoAdvanceInterval);
  }, []);

  const nextReview = () => changeReview("next");
  const prevReview = () => changeReview("prev");

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 relative">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Title Bar */}
        <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-center">
            Here's what <span style={{ color: "#25ccb6" }}>others</span> say
            about us
          </h2>
        </div>

        {/* Carousel Content */}
        <div
          className={`p-10 pt-4 text-center relative h-[26rem] flex flex-col justify-center items-center
          transition-all duration-300 ease-in-out ${
            isTransitioning
              ? "opacity-0 translate-x-10"
              : "opacity-100 translate-x-0"
          }`}
        >
          {/* Reviewer Photo */}
          <div className="mb-4">
            <img
              src={reviews[currentReview].photo}
              alt={reviews[currentReview].name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mx-auto"
            />
          </div>

          <div className="mb-6">
            <p className="text-lg text-gray-600 italic min-h-[4.5rem] flex items-center justify-center">
              "{reviews[currentReview].quote}"
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">
              {reviews[currentReview].name}
            </p>
            <p className="text-base text-gray-500">
              {reviews[currentReview].company}
            </p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700"
          >
            <ChevronRight size={36} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            {reviews.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === currentReview ? "bg-gray-700" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
