import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./ServicesTest.css";

const ServicesTest = () => {
  return (
    <div className="body-bg">
      <div className="titleContainer">
        <span className="mainTitle">
          Our <span style={{ color: "var(--accent-color)" }}>Services</span>{" "}
          Include
        </span>
        <span className="secondaryTitle">But are not limited to</span>
      </div>
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="carousel-container">
      <div className="carousel-content">
        <motion.div style={{ x }} className="motion-div">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              left: "3800px",
              height: "65rem",
              width: "120rem",
              fontSize: "8rem",
              lineHeight: "1.3",
            }}
          >
            Have something else in your mind? Reach out to us.
          </h1>
          <button
            style={{
              position: "absolute",
              left: "4690px",
              top: "355px",
              fontSize: "2rem",
              backgroundColor: "var(--accent-color)",
              height: "5rem",
              width: "12rem",
              borderRadius: "2rem",
              color: "#ffffff",
              scale: "1.1",
            }}
          >
            Click Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src="coding.png" alt="" style={{ height: "100px" }} />
      <h1 style={{ fontSize: "3.5rem" }}>Mobile App Development</h1>
      <div className="descriptionContainer">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique
        ab praesentium, aspernatur voluptatum inventore repudiandae libero
        quidem sequi officia amet maxime voluptates debitis delectus ex hic
        minima molestiae ratione?
      </div>
    </div>
  );
};

export default ServicesTest;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
