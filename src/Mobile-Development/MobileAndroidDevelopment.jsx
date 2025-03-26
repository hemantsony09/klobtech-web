import { motion } from "framer-motion";
import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import reactImg from "./assets/react.png";
import flutterImg from "./assets/flutter.png";
import androidImg from "./assets/android.png";
import appleImg from "./assets/apple.png";
import mobileIMG from "./assets/mobile.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";
import { Link } from "react-router-dom";

function Mad() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const features = [
    {
      title: "Custom Mobile App Development",
      description:
        "We create tailor-made mobile applications for both iOS and Android platforms, designed to meet your unique business needs and deliver exceptional user experiences.",
    },
    {
      title: "Cross-Platform App Development",
      description:
        "Our expertise in cross-platform development ensures your app works seamlessly across multiple devices, saving time and costs while reaching a wider audience.",
    },
    {
      title: "Mobile UI/UX Design",
      description:
        "We focus on creating intuitive and visually appealing user interfaces and experiences that engage users and ensure smooth navigation on both iOS and Android apps.",
    },
    {
      title: "Mobile App Integration",
      description:
        "We integrate third-party APIs and services to enhance your mobile app’s functionality, providing a seamless and feature-rich experience.",
    },
    {
      title: "App Maintenance & Support",
      description:
        "We provide ongoing support and maintenance for your mobile app, ensuring it remains up-to-date with the latest features, security updates, and bug fixes.",
    },
    {
      title: "Mobile App Testing & Quality Assurance",
      description:
        "We perform rigorous testing to ensure your mobile app is bug-free and optimized for performance across a variety of devices, reliable experience for users.",
    },
  ];
  const technologies = [
    {
      title: "React Native",
      image: reactImg,
      link: "/mad/react",
    },
    {
      title: "Flutter",
      image: flutterImg,
      link: "/mad/flutter",
    },
    {
      title: "Android",
      image: androidImg,
      link: "/mad/android",
    },
    {
      title: "iOS",
      image: appleImg,
      link: "/mad/ios",
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
              <img src={mobileIMG} alt="React JS" />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">Mobile App Development</h1>
              </div>
              <p className="heroDescription">
                KLobTech is a trailblazer in mobile app development, offering
                innovative and customized solutions to meet the unique needs of
                our clients. Our expert team focuses on blending creativity with
                functionality to deliver apps that stand out in today’s
                competitive market. Client satisfaction is at the heart of
                everything we do, and we are dedicated to transforming ideas
                into seamless digital experiences.
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
                Why Choose KLobTech for Mobile App Development?
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
            className="mobileImageGridContainer"
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
                  src={mobileIMG}
                  alt="React JS"
                  className="mobileHeroImg" // This class can be defined to increase the size if needed
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  <span className="text-[#333333]">
                    Mobile Android Development
                  </span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  KLobTech is a trailblazer in mobile app development, offering
                  innovative and customized solutions to meet the unique needs
                  of our clients. Our expert team focuses on blending creativity
                  with functionality to deliver apps that stand out in today’s
                  competitive market. Client satisfaction is at the heart of
                  everything we do, and we are dedicated to transforming ideas
                  into seamless digital experiences.
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
              React JS Development?
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[50%] mx-auto">
              {technologies.map((tech, index) => (
                <Link
                  key={index}
                  to={tech.link}
                  className="group bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300 rounded-xl p-8 text-center"
                >
                  <div className="flex items-center justify-center mb-6">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-lg"
                    />
                  </div>
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

export default Mad;