import "./Information.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Information() {
  const fullText = " is not just a platform, it's your partner in revenue GROWTH";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true }); // Detect visibility

  useEffect(() => {
    if (inView && index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 80); // Typing speed (adjust as needed)
      return () => clearTimeout(timer);
    }
  }, [index, inView]);

  return (
    <>
      <div id="information" className="infoContainer">
        <div className="infoTextArea">
          {/* First paragraph remains unchanged */}
          <h1>
            <span style={{ color: "var(--accent-color)" }}>KLob</span>Tech
            stands at the forefront of technological innovation, driven by a
            highly skilled and dedicated IT team. We specialize in full-stack
            development and mobile app solutions to craft seamless,
            high-performance applications. Our commitment to cutting-edge
            technology and precision ensures transformative digital solutions
            tailored to your unique needs. In addition, we provide high-quality
            B2B market research, verified contact data, and actionable insights.
          </h1>

          {/* Second paragraph with typing animation when in view */}
          <h1 ref={ref} className="typing-text text-[3rem] w-full xl:text-nowrap ">
            <span className="" style={{ color: "var(--accent-color)" }}>KLob</span>Tech
            {displayText}
            <span className="cursor">|</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Information;
