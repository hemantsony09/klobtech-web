
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import { Link } from "react-router-dom";
import herocmsImg from "./assets/cms.png";
import shopifyImg from "./assets/shopify.png";
import wordpressImg from "./assets/wordpress.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import ScrollToTop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

import "../index.css";

function Cms() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const services = [
    {
      title: "Strategic App Planning",
      description:
        "Lay a strong foundation for your app development with our expert consultation services. Using data-driven insights, we align your vision with a clear and actionable development strategy.",
    },
    {
      title: "Personalized App Solutions",
      description:
        "Empower your business with custom-built React Native apps. Our team delivers unique solutions crafted to enhance productivity and drive efficiency, meeting your specific business objectives.",
    },
    {
      title: "End-to-End Development",
      description:
        "Experience the full spectrum of React Native development. From strategy and design to deployment and ongoing support, we deliver end-to-end solutions to ensure your app’s success.",
    },
    {
      title: "Accelerated MVP Delivery",
      description:
        "Bring your ideas to life with our streamlined React Native MVP development. Perfect for startups and innovators, our approach helps you test market potential and engage users rapidly.",
    },
    {
      title: "Cross-Platform Expertise",
      description:
        "Expand your digital footprint with powerful apps for both Android and iOS. Our React Native experts create seamless, interactive experiences to captivate users across platforms.",
    },
    {
      title: "Seamless App Migration",
      description:
        "Modernize your mobile solutions with our hassle-free migration and upgrade services. Transition to React Native effortlessly, improve app performance, and stay ahead with the latest features.",
    },
  ];

  const technologies = [
    {
      title: "Shopify",
      image: shopifyImg,
      link: "/cms/shopify",
    },
    {
      title: "WordPress",
      image: wordpressImg,
      link: "/cms/wordpress",
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
          <ScrollToTop />
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
              <img style={{ height: "40rem" }} src={herocmsImg} alt="" />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">CMS Services</h1>
              </div>

              <p className="heroDescription">
                Empower your business with expertly crafted React Native apps
                tailored to your unique needs. Our team specializes in creating
                cross-platform mobile solutions for diverse industries,
                delivering user-friendly interfaces and dynamic experiences.
                Elevate your digital journey with next-gen mobile apps designed
                to enhance engagement and performance.
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
                Why Choose KLobTech for CMS Services?
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

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mobileImageGridContainer"
          >
            <div className="gridTitleArea">
              <p className="mobileGridTitle">
                We Specialize in the Following Technologies
              </p>
            </div>
            <div className="mobileGridArea">
              {technologies.map((tech, index) => (
                <Link key={index} to={tech.link}>
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
                      </p>
                    </div>
                    <div className="mobileServiceImage">
                      <img src={tech.image} alt={tech.title} />
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
          <ScrollToTop />
          <BackToTopButton />

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
                  src={herocmsImg}
                  alt="CMS Services"
                  className="mobileHeroImg"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  <span className="text-[#333333]">CMS Services</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  Empower your business with expertly crafted React Native apps
                  tailored to your unique needs. Our team specializes in
                  creating cross-platform mobile solutions for diverse
                  industries, delivering user-friendly interfaces and dynamic
                  experiences. Elevate your digital journey with next-gen mobile
                  apps designed to enhance engagement and performance.
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
              Why Choose <span className="text-teal-500">KLobTech</span> for CMS
              Services?
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
                  
                            {/* Technologies Section */}
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
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[50%] mx-auto">
                                {technologies.map((tech, index) => (
                                  <Link
                                    key={index}
                                    to={tech.link}
                                    className="group bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300 rounded-xl p-8 text-center"
                                  >
                                    <motion.div
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 0.5, delay: index * 0.2 }}
                                      className="flex items-center justify-center mb-6"
                                    >
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
                  
                            <Mobilefooter />
                          </div>
                        )}
                      </>
                    );
                  }
                  
                  export default Cms;