
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import { Link } from "react-router-dom";
import reactImg from "./Assets/react.png";
import aiImg from "./Assets/ai.png";
import angularImg from "./Assets/angular.png";
import phpImg from "./Assets/php.png";
import pythonImg from "./Assets/python.png";
import nodeImg from "./Assets/node.png";
import webdevImg from "./Assets/webdev.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

import "../index.css";

function FullStackDevelopment() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const services = [
    {
      title: "E-Commerce Development",
      description:
        "Looking to launch an online store? At KLobTech, we design and build eCommerce websites tailored to diverse business domains, ensuring they meet market demands and deliver exceptional user experiences.",
    },
    {
      title: "Frontend Development",
      description:
        "Our experts craft visually stunning, intuitive user interfaces, ensuring seamless functionality and a captivating user experience that sets your platform apart.",
    },
    {
      title: "Backend Development",
      description:
        "We leverage the power of RDBMS, Big Data, and cloud platforms like Azure and AWS to create robust, scalable web applications that meet the highest standards of performance and reliability.",
    },
    {
      title: "Content Management",
      description:
        "Delivering value is our priority. We customize CMS solutions to perfectly align with your business goals, streamlining content creation and management with ease.",
    },
    {
      title: "Custom Web Applications",
      description:
        "Have a unique vision for your web app? Our team specializes in bringing your ideas to life with fully customized solutions. Hire KLobTech to turn your vision into reality.",
    },
    {
      title: "Corporate Websites",
      description:
        "Elevate your business with a professional corporate website. At KLobTech, we provide comprehensive development services to establish a strong and impactful online presence.",
    },
  ];

  const technologies = [
    {
      title: "React JS",
      image: reactImg,
      link: "/fullStackDevelopment/react",
    },
    {
      title: "AI/ML",
      image: aiImg,
      link: "/fullStackDevelopment/aiml",
    },
    {
      title: "Node JS",
      image: nodeImg,
      link: "/fullStackDevelopment/node",
    },
    {
      title: "Angular JS",
      image: angularImg,
      link: "/fullStackDevelopment/angular",
    },
    {
      title: "Python",
      image: pythonImg,
      link: "/fullStackDevelopment/python",
    },
    {
      title: "PHP",
      image: phpImg,
      link: "/fullStackDevelopment/php",
    },
  ];

  return (
    <>
      {/* Desktop View */}
      {!isMobile && (
        <>
          <div
          >
            <Logo />
          </div>
          <BackToTopButton />
          <Scrolltotop />
          <Navbar />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="serviceHero"
          >
            <div>
              <img src={webdevImg} alt="Web Development" />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">Full Stack Development</h1>
              </div>
              <p className="heroDescription">
                At KLobTech, we deliver high-quality web applications tailored
                to your business needs. Specializing in optimized and
                user-friendly web development, we provide secure and
                cost-effective solutions for businesses worldwide. Trust
                KLobTech as your reliable partner for exceptional web and app
                development services.
              </p>
            </div>
          </motion.div>

          {/* Service Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mobileServiceGridContainer"
          >
            <div className="serviceGridTitleContainer">
              <p className="serviceTitle">
                Why Choose KLobTech for Full Stack Development?
              </p>
            </div>
            <div className="gridArea">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="appService"
                >
                  <div className="appServiceTitleArea">
                    <p>{service.title}</p>
                  </div>
                  <div className="appServiceDescriptionArea">
                    <p className="appServiceDescription">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            
            className="mobileImageGridContainer !h-[950px] bg-gray-50" // This class can be defined to increase the height if needed
          >
            <div className="gridTitleArea">
              <p className="mobileGridTitle">
                We Specialize in the Following Technologies
              </p>
            </div>
            <div className="mobileGridArea">
              {technologies.map((tech, index) => (
                <Link to={tech.link} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="mobileImageService"
                  >
                    <div className="mobileImageTitleArea">
                      <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                        {tech.title}
                      </p>{" "}
                    </div>
                    <div className="mobileServiceImage">
                      <Link to={tech.link}>
                        <img src={tech.image} alt="" />
                      </Link>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Footer />
          </motion.div>
        </>
      )}

      {/* Mobile View */}
      {isMobile && (
        <div className="font-sans">
          {/* Mobile Navbar */}
          <Navbar />
          <BackToTopButton />
          <Scrolltotop />

          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-12 px-4 text-center bg-[#f3f3f3] rounded-3xl mx-8"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="w-48 h-48">
                <img
                  src={webdevImg}
                  alt="Web Development"
                  className="mobileHeroImg" // This class can be defined to increase the size if needed
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  <span className="text-[#333333]">Full Stack Development</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  At KLobTech, we deliver high-quality web applications tailored
                  to your business needs. Specializing in optimized and
                  user-friendly web development, we provide secure and
                  cost-effective solutions for businesses worldwide. Trust
                  KLobTech as your reliable partner for exceptional web and app
                  development services.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Service Features */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-12 px-4 bg-white"
          >
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
              Why Choose <span className="text-teal-500">KLobTech</span> for
              Full Stack Development?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[85%] mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-white to-gray-50 pt-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 border-b-4 border-teal-500 inline-block pb-2 w-full rounded-3xl">
                    {service.title}
                  </h3>
                  <p className="text-xl md:text-xl text-gray-600 leading-relaxed text-justify px-8 py-6 pb-8">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Service Technologies */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="px-4 py-12 bg-gray-50"
         >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">
                We Specialize in the Following Technologies
              </h2>
            </div>
            < div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[50%] mx-auto">
              {technologies.map((tech, index) => (
                <Link
                  key={index}
                  to={tech.link}
                  className="group bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300 rounded-xl p-8 text-center"
                >
                  <motion.div className="flex items-center justify-center mb-6">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-lg"
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-teal-600">
                    {tech.title}
                  </h3>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Mobile Footer */}
          <Mobilefooter />
        </div>
      )}
    </>
  );
}

export default FullStackDevelopment;