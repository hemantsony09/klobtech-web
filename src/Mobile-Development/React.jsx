import { motion } from "framer-motion";
import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import reactImg from "./assets/react.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

function React() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const features = [
    {
      title: "Strategic App Planning",
      description:
        "Lay a strong foundation for your app development with our expert consultation services. We align your vision with an actionable development strategy.",
    },
    {
      title: "Personalized App Solutions",
      description:
        "Empower your business with React Native apps. Our team delivers unique solutions crafted to enhance productivity and meet your specific business objectives.",
    },
    {
      title: "End-to-End Development",
      description:
        "Experience the full spectrum of React Native development. From strategy and design to deployment, we deliver end-to-end solutions to ensure your app’s success.",
    },
    {
      title: "Accelerated MVP Delivery",
      description:
        "Bring your ideas to life with our streamlined React Native MVP development. Perfect for startups, our approach helps you test market potential and engage users rapidly.",
    },
    {
      title: "Cross-Platform Expertise",
      description:
        "Expand your digital footprint with powerful apps for both Android and iOS. Our React Native experts create interactive experiences to captivate users across platforms.",
    },
    {
      title: "Seamless App Migration",
      description:
        "Modernize your mobile solutions with our hassle-free migration and upgrade services. Transition to React Native effortlessly and stay ahead with the latest features.",
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
              <img src={reactImg} alt="" />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">React Native Development</h1>
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

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mobileServiceGridContainer"
          >
            <div className="serviceGridTitleContainer">
              <p className="serviceTitle">
                Why Choose KLobTech for React Native Development?
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
          {/* Hero Section */}
          <BackToTopButton />
          <Scrolltotop />
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-12 px-4 text-center bg-[#f3f3f3] rounded-3xl mx-8"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Increase image size for mobile and avoid cropping */}
              <div className="w-48 h-48 md:w-32 md:h-32">
                <img
                  src={reactImg}
                  alt="Mobile App Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  <span className="text-[#333333]">
                    React Native Development
                  </span>
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

          {/* Features Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-12 px-4 bg-white"
          >
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
              Why Choose <span className="text-teal-500">KLob</span>Tech for
              Mobile App Development?
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

export default React;