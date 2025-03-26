import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Thompson",
    company: "TechInnovate Solutions",
    quote:
      "An exceptional service that transformed our approach to digital strategy. Their innovative solutions and deep understanding of our business challenges were truly remarkable. ",
    photo:
      "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "Global Nexus Consulting",
    quote:
      "Unparalleled expertise and commitment to delivering outstanding results. From the initial consultation to the final implementation, their team demonstrated an incredible level of professionalism and technical prowess. ",
    photo:
      "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Emily Chen",
    company: "Quantum Dynamics Inc.",
    quote:
      "A game-changing partnership that exceeded all our expectations. Their strategic insights and cutting-edge approach have fundamentally reshaped our business model. ",
    photo:
      "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
  },
  {
    id: 4,
    name: "Emily Chen",
    company: "Quantum Dynamics Inc.",
    quote:
      "A game-changing partnership that exceeded all our expectations. Their strategic insights and cutting-edge approach have fundamentally reshaped our business model. ",
    photo:
      "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
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
    }, 300000);

    return () => clearInterval(autoAdvanceInterval);
  }, []);

  const nextReview = () => changeReview("next");
  const prevReview = () => changeReview("prev");

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden relative">
        {/* Title Bar */}
        <div className="bg-gray-100 px-4 sm:px-6 py-4 border-b border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            Here's what <span style={{ color: "#25ccb6" }}>others</span> say
            about us
          </h2>
        </div>

        {/* Navigation Buttons - Positioned outside the content area */}
        <button
          onClick={prevReview}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 bg-white/80 hover:bg-white/90 rounded-r-lg transition-colors z-10"
          aria-label="Previous review"
        >
          <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={nextReview}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 bg-white/80 hover:bg-white/90 rounded-l-lg transition-colors z-10"
          aria-label="Next review"
        >
          <ChevronRight size={24} className="sm:w-8 sm:h-8" />
        </button>

        {/* Carousel Content */}
        <div
          className={`px-4 sm:px-10 py-8 text-center relative h-[26rem] flex flex-col justify-center items-center
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
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-md mx-auto"
            />
          </div>

          <div className="mb-6 px-8 sm:px-12">
            <p className="text-base sm:text-lg text-gray-600 italic min-h-[4.5rem] flex items-center justify-center">
              "{reviews[currentReview].quote}"
            </p>
          </div>
          <div>
            <p className="text-lg sm:text-xl font-semibold text-gray-800">
              {reviews[currentReview].name}
            </p>
            <p className="text-sm sm:text-base text-gray-500">
              {reviews[currentReview].company}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {reviews.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
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
