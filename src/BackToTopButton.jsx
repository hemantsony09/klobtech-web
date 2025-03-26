import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    // Manually use a smooth scrolling implementation for consistency
    let scrollDuration = 300; // milliseconds
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "var(--accent-color)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "20px",
    display: isVisible ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 1000,
  };

  return (
    <a href="#">
      {" "}
      <button
        style={buttonStyle}
        // onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ▲ {/* Unicode arrow-up symbol */}
      </button>
    </a>
  );
};

export default BackToTopButton;
