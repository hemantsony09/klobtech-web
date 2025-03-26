"use client";
import { useState } from "react";

function Review() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content:
        "The quality of service exceeded all my expectations. Their innovative solutions transformed our marketing strategy completely. The team's dedication to excellence and timely delivery made a significant impact on our business growth. I particularly appreciated their proactive communication and willingness to go above and beyond.",
      avatar: "/avatar1.jpg",
    },
    {
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      content:
        "Incredible attention to detail and outstanding customer support. The team demonstrated exceptional technical expertise and problem-solving abilities. They not only met our complex requirements but also provided valuable insights that improved our initial concept. Their collaborative approach and commitment to quality made them a perfect partner.",
      avatar: "/avatar2.jpg",
    },
    {
      name: "Emma Williams",
      role: "Creative Designer",
      content:
        "Working with this team has been an absolute pleasure. Their creative vision and technical execution are unmatched in the industry. They consistently delivered innovative solutions while maintaining the highest standards of quality. The level of professionalism and expertise they brought to each project was truly impressive. I look forward to many more collaborations.",
      avatar: "/avatar3.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] py-8 px-4 md:py-[6rem] md:px-[2rem]">
      <h2 className="text-[2.4rem] md:text-[3.6rem] font-montserrat text-center font-bold mb-[2rem] md:mb-[4rem] text-[#333]">
        Here's what others say about us
      </h2>

      <div className="max-w-[120rem] mx-auto relative">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-2 md:px-[2rem]"
              >
                <div className="bg-white rounded-lg md:rounded-[2rem] p-4 md:p-[3rem] shadow-lg">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-[2rem] mb-4 md:mb-[2rem]">
                    <img
                      src={review.avatar}
                      alt={`${review.name}'s profile picture`}
                      className="w-16 h-16 md:w-[6rem] md:h-[6rem] rounded-full object-cover"
                    />
                    <div className="text-center md:text-left">
                      <h3 className="text-xl md:text-[2rem] font-semibold font-montserrat text-[#333]">
                        {review.name}
                      </h3>
                      <p className="text-base md:text-[1.6rem] text-[#666]">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-base md:text-[1.8rem] text-[#444] leading-relaxed font-roboto text-center md:text-left">
                    "{review.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 md:left-[-2rem] top-1/2 transform -translate-y-1/2 bg-white w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] rounded-full shadow-lg flex items-center justify-center text-[1.6rem] md:text-[2rem] hover:bg-[#f8f9fa] transition-colors z-10"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 md:right-[-2rem] top-1/2 transform -translate-y-1/2 bg-white w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] rounded-full shadow-lg flex items-center justify-center text-[1.6rem] md:text-[2rem] hover:bg-[#f8f9fa] transition-colors z-10"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <div className="flex justify-center mt-[2rem] md:mt-[3rem] gap-[1rem]">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-[0.8rem] h-[0.8rem] md:w-[1rem] md:h-[1rem] rounded-full transition-colors ${
                currentSlide === index ? "bg-[#333]" : "bg-[#ccc]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
