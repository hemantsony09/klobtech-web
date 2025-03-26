import { motion } from "framer-motion";
import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import nativeImg from "./assets/android.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

function Native() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const features = [
    {
      title: "App Strategy Consultation",
      description:
        "Kickstart your app journey with expert guidance. We develop a clear, actionable plan that aligns with your business objectives and market opportunities, ensuring your success from day one.",
    },
    {
      title: "Custom App Development",
      description:
        "Transform your ideas into reality with bespoke Android app development. Our solutions are designed to provide seamless performance, innovative features, and a superior user experience.",
    },
    {
      title: "Engaging UI/UX Design",
      description:
        "Create stunning, intuitive designs that captivate users. We focus on user-centric interfaces that offer both style and functionality, ensuring your app stands out in a competitive market.",
    },
    {
      title: "App Enhancement Services",
      description:
        "Boost your app’s performance with our upgrade and extension services. We add new features and improve functionality to ensure your app evolves with market trends and user needs.",
    },
    {
      title: "Seamless App Integration",
      description:
        "Automate processes and improve efficiency by integrating AI-powered features into your Android app. Our seamless integrations enhance functionality and streamline operations effortlessly.",
    },
    {
      title: "Reliable Support Services",
      description:
        "At KLobTech, we go beyond development by offering dedicated maintenance and support. Keep your Android app running smoothly with regular updates, feature enhancements, and expert assistance.",
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
              <img src={nativeImg} alt="Native Android Development" />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">Native Android Development</h1>
              </div>

              <p className="heroDescription">
                Unlock the potential of your business with KLobTech’s premier
                Android app development services. We deliver tailored,
                high-performance solutions that align with your goals. Whether
                you're a startup aiming to make an impact or an established
                enterprise seeking growth, our expert team is here to transform
                your vision into reality. Join our valued clients who trust us
                to elevate their brand. Ready to create an innovative Android
                app that drives success? Your journey starts with KLobTech!
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
                Why Choose KLobTech for Native Android Development?
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
                  src={nativeImg}
                  alt="Mobile App Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  <span className="text-[#333333]">
                    Native Android Development
                  </span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  Unlock the potential of your business with KLobTech’s premier
                  Android app development services. We deliver tailored,
                  high-performance solutions that align with your goals. Whether
                  you're a startup aiming to make an impact or an established
                  enterprise seeking growth, our expert team is here to
                  transform your vision into reality. Join our valued clients
                  who trust us to elevate their brand. Ready to create an
                  innovative Android app that drives success? Your journey
                  starts with KLobTech!
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
              Why Choose <span className="text-teal-500">KLobTech</span> for
              Native Android Development?
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

export default Native;