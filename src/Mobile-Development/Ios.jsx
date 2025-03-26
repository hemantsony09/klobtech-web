
import { motion } from "framer-motion";
import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import appleImg from "./assets/apple.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

function Ios() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const features = [
    {
      title: "Custom iOS Development",
      description:
        "KLobTech understands that your business is unique, and so are your app needs. Our expert iOS developers create personalized solutions designed to connect with your audience and achieve your specific goals.",
    },
    {
      title: "Advanced iOS Integration",
      description:
        "Integrate the latest technologies into your app. Our developers bring in AI, AR/VR, and other modern features to elevate your iOS app’s functionality, making it more engaging and future-ready.",
    },
    {
      title: "iPhone App Support",
      description:
        "Our iOS app support services ensure your app remains top-performing. KLobTech provides reliable maintenance, updates, and continuous optimization to keep your app running smoothly across all devices.",
    },
    {
      title: "iOS Solutions for Enterprises",
      description:
        "Unlock powerful, custom iOS solutions for your enterprise. KLobTech offers apps that integrate machine learning and cutting-edge technology to improve data analysis and streamline business operations.",
    },
    {
      title: "App Upgrade & Extension",
      description:
        "Stay up-to-date with every new iOS update. KLobTech offers seamless upgrade and extension services that enhance your app’s capabilities and ensure it delivers the latest features.",
    },
    {
      title: "Effortless App Integration",
      description:
        "Maximize your app’s impact by seamlessly integrating it with your existing business systems. KLobTech ensures a smooth iOS app integration for faster growth, better functionality, and a broader reach.",
    },
  ];

  return (
    <>
      {/* Desktop View */}
      {!isMobile && (
        <>
          <div>
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
              <img src={appleImg} alt="iOS App Development" />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">iOS Development</h1>
              </div>

              <p className="heroDescription">
                Choose KLobTech for top-tier iOS app development services. We
                specialize in building apps for iPhone, iPad, Apple TV, and
                Apple Watch. With our expertise, we deliver high-performance,
                user-centric iOS applications designed to make an impact across
                various Apple devices. Ready to elevate your business with
                custom Apple app development solutions? Let’s make it happen
                together!
              </p>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mobileServiceGridContainer"
          >
            <div className="serviceGridTitleContainer">
              <p className="serviceTitle">
                Why Choose KLobTech for iOS Development?
              </p>
            </div>
            <div className="gridArea">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="appService"
                >
                  <div className="appServiceTitleArea">
                    <p>{feature.title}</p>
                  </div>
                  <div className="appServiceDescriptionArea">
                    <p className="appServiceDescription">
                      {feature.description}
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
                  src={appleImg}
                  alt="Mobile App Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  <span className="text-[#333333]">iOS Development</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  Choose KLobTech for top-tier iOS app development services. We
                  specialize in building apps for iPhone, iPad, Apple TV, and
                  Apple Watch. With our expertise, we deliver high-performance,
                  user-centric iOS applications designed to make an impact
                  across various Apple devices. Ready to elevate your business
                  with custom Apple app development solutions? Let’s make it
                  happen together!
                </p>
              </div>
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-12 px-4 bg-white"
          >
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
              Why Choose <span className="text-teal-500">KLobTech</span> for iOS
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

export default Ios;