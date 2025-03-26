import { motion } from "framer-motion";
import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import phpImg from "./Assets/php.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

function Php() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const features = [
    {
      title: "Custom PHP Solutions",
      description:
        "Create dynamic PHP web applications tailored to your business needs. Our experts use frameworks like CakePHP, CodeIgniter, Yii, Zend, Symfony, and Laravel to deliver high-quality, enterprise-grade solutions.",
    },
    {
      title: "E-commerce Development",
      description:
        "Build scalable and feature-rich e-commerce platforms with PHP. We offer customized solutions that enhance user experience and align perfectly with your business objectives.",
    },
    {
      title: "CMS Development Services",
      description:
        "Specializing in WordPress, Joomla, Magento, and Drupal, we deliver highly customized CMS websites for seamless content management. Our team ensures the final product aligns with your business goals and provides ease of use.",
    },
    {
      title: "Social Networking Development",
      description:
        "Develop engaging social networking apps with modern PHP technologies. We create collaborative platforms that keep users connected while implementing the latest trends for optimal performance.",
    },
    {
      title: "API Integration Services",
      description:
        "Seamlessly integrate third-party APIs into your PHP systems. Our team ensures smooth API connections, enhancing the functionality and scalability of your web solutions.",
    },
    {
      title: "Custom Web Portals",
      description:
        "We specialize in creating business-centric web portals, including B2B, B2C, and enterprise solutions. Designed to streamline operations and drive growth, our portals offer tailored solutions for improved customer engagement and collaboration.",
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

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="serviceHero"
          >
            <div>
              <img
                src={phpImg}
                alt="PHP Development"
                className="serviceHeroImg"
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">PHP Development</h1>
              </div>

              <p className="heroDescription">
                Welcome to KLobTech, your trusted partner for exceptional PHP
                development services! Our team excels in creating smart,
                feature-rich PHP solutions tailored to meet the needs of
                businesses worldwide. With a focus on scalability and speed, we
                build high-performance PHP applications that drive success.
                Count on our expert PHP developers to deliver fully customizable
                solutions using the latest technologies.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mobileServiceGridContainer"
          >
            <div className="serviceGridTitleContainer">
              <p className="serviceTitle">
                Why Choose KLobTech for PHP Development?
              </p>
            </div>
            <div className="gridArea">
              {features.map((service, index) => (
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
              <div className="w-40 h-40">
                <img
                  src={phpImg}
                  alt="PHP Development"
                  className="mobileHeroImg"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  <span className="text-[#333333]">PHP Development</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  Welcome to KLobTech, your trusted partner for exceptional PHP
                  development services! Our team excels in creating smart,
                  feature-rich PHP solutions tailored to meet the needs of
                  businesses worldwide. With a focus on scalability and speed,
                  we build high-performance PHP applications that drive success.
                  Count on our expert PHP developers to deliver fully
                  customizable solutions using the latest technologies.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Services Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-12 px-4 bg-white"
          >
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
              Why Choose <span className="text-teal-500">KLobTech</span> for PHP
              Development?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[85%] mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-white to-gray-50 pt-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 border-b-4 border-teal-500 inline-block pb-2 w-full rounded-3xl">
                    {feature.title}
                  </h3>
                  <p className="text-xl md:text-xl text-gray-600 leading-relaxed text-justify px-8 py-6 pb-8">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <Mobilefooter />
        </div>
      )}
    </>
  );
}

export default Php;