import "./Hero.css";
function Hero() {
  return (
    <>
      <div className="hero-container">
        <h1 className="hero-title">
          <span style={{ color: "var(--accent-color)" }}>KLob</span>Tech
        </h1>
        <h2 className="hero-description">
          Innovating tomorrow&apos;s technology today
        </h2>
      </div>
    </>
  );
}

export default Hero;
