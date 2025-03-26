import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import Navbar from "./Nav/Navbar";
import Footer from "./Components/Footer";
import BackToTopButton from "./BackToTopButton";
import Mobilefooter from "./Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Logo from "./Components/logo";
import imgAbout from "./assets/stockAbout.jpg";
import imgMission from "./assets/stockMission.jpg";
import { Link } from "react-router-dom";

const AnimatedCounter = ({ targetNumber }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 2; 
    const interval = 10; 
    const increment = Math.ceil(
      (parseInt(targetNumber, 10) / (duration * 1000)) * interval
    );

    const timer = setInterval(() => {
      setCount((prev) => {
        const nextValue = prev + increment;
        if (nextValue >= parseInt(targetNumber, 10)) {
          clearInterval(timer);
          return targetNumber;
        }
        return nextValue;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return <span>{count}</span>;
};

const KlobTech = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const stats = [
    { number: "3450+", label: "FOLLOWERS" },
    { number: "1000+", label: "PRODUCT" },
    { number: "560+", label: "SALES" },
    { number: "850+", label: "JOB EVENT" },
  ];

  const services = [
    {
      title: "WEB DEVELOPMENT",
      icon: "",
      description:
        "We specialize in delivering high-quality, secure, and cost-effective web development services, ensuring user-friendly solutions for businesses worldwide.",
      link: "/fullStackDevelopment",
    },
    {
      title: "MOBILE APP",
      icon: "",
      description:
        "KLobTech is a top mobile app development company, dedicated to delivering high-quality, customer-focused solutions on time and within budget.",
      link: "/mad",
    },
    {
      title: "CMS",
      icon: "",
      description:
        "At KLobtech, we provide a range of e-commerce development services tailored to meet all the requirements of the e-commerce sector.",
      link: "/cms",
    },
  ];

  const technologies = [
    "PYTHON",
    "UI / UX DESIGNER",
    "GRAPHIC DESIGNING",
    "FLUTTER APP",
    "ANDROID APP",
    "IOS APP",
    "REACT NATIVE",
    "JAVA SCRIPT",
    "PHP",
  ];
  const projects = [
    {
      id: 1,
      title: "Cake World",
      description:
        "A comprehensive employee portal featuring an admin panel, CSV upload, and employee filtering using the MERN stack.",
      image: imgAbout,
      link: "http://www.cakegift.in",
    },
    {
      id: 2,
      title: "Sugaroot",
      description:
        "A Vanilla JavaScript banking app with real-time transaction functionality and polished UI.",
      image: imgAbout,
      link: "https://www.sugaroot.com",
    },
    {
      id: 3,
      title: "IT Company Website",
      description:
        "A responsive IT company website featuring a chatbot and various company details.",
      image: imgAbout,
      link: "/projects/it-company-website",
    },
    {
      id: 4,
      title: "Map Application",
      description:
        "An interactive map app using Leaflet.js for adding and managing events, with persistent local storage.",
      image: imgAbout,
      link: "/projects/map-application",
    },
  ];

  return (
    <>
      {!isMobile && (
        <div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Logo></Logo>
        </div>
      )}
      <BackToTopButton></BackToTopButton>
      <Navbar></Navbar>
      <div className="klobtech">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="klobtech__hero"
        >
          <div className="klobtech__container">
            <h1 className="klobtech__hero-title">WELCOME TO KLOBTECH</h1>
            <p className="klobtech__hero-text">
              Unleashing the power of the latest web and mobile technologies, we
              passionately build, foster, and fortify your business, ensuring a
              dynamic and resilient online presence.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="klobtech__stats"
        >
          <motion.div className="klobtech__container">
            <div className="klobtech__stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="klobtech__stats-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h3 className="klobtech__stats-number">
                    <AnimatedCounter targetNumber={stat.number} />
                  </h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <div
          
          className="klobtech__about"
        >
          <div className="klobtech__container">
            {/* ABOUT US */}
            <h2 className="klobtech__section-title">ABOUT US</h2>
            <motion.div initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }} className="klobtech__about-item">
              <img
                src={imgAbout}
                alt="About Us"
                className="klobtech__about-image"
              />
              <p className="klobtech__about-text">
                KLobTech, your top-tier Mobile and Web App Development Company
                in India. We excel in technological expertise, customizing
                solutions for your brand's online dominance. Innovation meets
                proficiency, making us your key to a standout digital identity.
                KLobTech, your top-tier Mobile and Web App Development Company
                in India. We excel in technological expertise, customizing
                solutions for your brand's online dominance. Innovation meets
                proficiency, making us your key to a standout digital identity.
              </p>
            </motion.div>

            {/* VISION AND MISSION */}
            <h2 className="klobtech__section-title">VISION & MISSION</h2>
            <motion.div initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }} className="klobtech__about-item klobtech__about-reverse">
              <img
                src={imgMission}
                alt="Vision and Mission"
                className="klobtech__about-image"
              />
              <p className="klobtech__about-text">
                KLobTech envisions being your key to success, providing
                top-notch software and web services with a focus on quality and
                efficiency.
                <br />
                <br />
                Our mission is to consistently exceed your expectations,
                empowering our team to deliver superior performance and
                accelerate your business's pace.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="klobtech__services"
        >
          <div className="klobtech__container">
            <h2 className="klobtech__section-title">OUR SERVICES</h2>
            <div className="klobtech__services-grid">
              {services.map((service, index) => (
                <Link
                  to={service.link}
                  key={index}
                  className="klobtech__service-card"
                >
                  <div className="klobtech__service-icon">{service.icon}</div>
                  <h3 className="klobtech__service-title">{service.title}</h3>
                  <p>{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="klobtech__tech"
        >
          <div className="klobtech__container">
          <h2 className="klobtech__section-title">TECHNOLOGIES WE WORK WITH</h2>
            <div className="klobtech__tech-grid">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="klobtech__tech-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="klobtech__projects"
        >
        </motion.div>
      </div>

      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Footer></Footer>
        </motion.div>
      )}
      {isMobile && <Mobilefooter></Mobilefooter>}
    </>
  );
};

export default KlobTech;