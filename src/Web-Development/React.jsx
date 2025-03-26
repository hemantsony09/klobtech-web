import { motion } from "framer-motion";
import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import reactImg from "./Assets/react.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";
import { Link } from "react-router-dom";

function React() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const features = [
    {
      title: "Mobile App Development",
      description:
        "Develop high-quality, cross-platform mobile apps for iOS and Android with our expert React.js development. We utilize React’s efficient components to build seamless applications, ensuring exceptional user experiences.",
    },
    {
      title: "Web App Solutions",
      description:
        "Create scalable, high-performance, and SEO-friendly web applications with our React.js expertise. We design solutions tailored to your business requirements, delivering enhanced functionality and future growth.",
    },
    {
      title: "Effortless App Migration",
      description:
        "Smoothly transition your business to the React.js framework. Our team follows industry best practices to ensure a seamless migration, improving performance and maintaining service continuity.",
    },
    {
      title: "Seamless App Integration",
      description:
        "Unlock the full potential of React.js through seamless integration. We enhance your app's functionality by adding new features with minimal coding, improving overall performance and user experience.",
    },
    {
      title: "Custom Development Services",
      description:
        "We specialize in highly customized React.js development, ensuring seamless integration with third-party services and enhancing the capabilities of your existing applications for optimal performance.",
    },
    {
      title: "Ongoing Maintenance Support",
      description:
        "We specialize in creating business-centric web portals, including B2B, B2C, and enterprise solutions. Designed to streamline operations and drive growth collaboration.",
    },
  ];
  const technologies = [
    {
      title: "React",
      image: reactImg,
      link: "/technologies/react",
    },
    {
      title: "Node.js",
      image: "./assets/node.png",
      link: "/technologies/node",
    },
    {
      title: "Flutter",
      image: "./assets/flutter.png",
      link: "/technologies/flutter",
    },
    {
      title: "MongoDB",
      image: "./assets/mongodb.png",
      link: "/technologies/mongodb",
    },
    {
      title: "Express.js",
      image: "./assets/express.png",
      link: "/technologies/express",
    },
    {
      title: "JavaScript",
      image: "./assets/javascript.png",
      link: "/technologies/javascript",
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
              <img src={reactImg} alt="React JS" />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">React JS Development</h1>
              </div>
              <p className="heroDescription">
                Discover exceptional React.js web development services at
                KLobTech, a leading company in the industry. We provide tailored
                solutions for building robust and scalable web applications
                using React.js. Our skilled team of React.js developers delivers
                high-quality, efficient development services, trusted by both
                startups and enterprises. With a focus on performance and
                innovation, we ensure your project stands out in the digital
                space. Ready to take your web development to the next level?
                Partner with KLobTech for impactful, future-proof solutions.
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
                Why Choose KLobTech for React JS Development?
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
              <div className="w-48 h-48">
                <img
                  src={reactImg}
                  alt="React JS"
                  className="mobileHeroImg"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  <span className="text-[#333333]">React JS Development</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  Discover exceptional React.js web development services at
                  KLobTech, a leading company in the industry. We provide
                  tailored solutions for building robust and scalable web
                  applications using React.js. Our skilled team of React.js
                  developers delivers high-quality, efficient development
                  services, trusted by both startups and enterprises. With a
                  focus on performance and innovation, we ensure your project
                  stands out in the digital space. Ready to take your web
                  development to the next level? Partner with KLobTech for
                  impactful, future-proof solutions.
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
              ))}              </div>
  
              <Mobilefooter />
              </motion.section>
            </div>
     
        )}
      </>
    );
  }
  
  export default React;