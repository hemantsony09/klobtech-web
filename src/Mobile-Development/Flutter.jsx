
import { motion } from "framer-motion";
import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import flutterImg from "./assets/flutter.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

function Flutter() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const features = [
    {
      title: "Ideation and Strategy",
      description:
        "Leverage Flutter’s potential with expert guidance from our team. We delve into your business goals, analyze market trends, and craft a strategic Flutter development plan to ensure your app’s success.",
    },
    {
      title: "Tailored App Solutions",
      description:
        "We design customized Flutter applications to meet your unique business needs. From streamlining operations to improving user engagement, our bespoke solutions are crafted to drive growth and mobility.",
    },
    {
      title: "Cross-Platform Excellence",
      description:
        "Save time and resources with our Flutter cross-platform app development services. Delivering top-quality apps for Android and iOS, we ensure visually appealing designs and faster time to market.",
    },
    {
      title: "Modern UX/UI Design",
      description:
        "With Flutter, we create sleek and intuitive designs that captivate users. Our focus on modern UX/UI enhances user experiences, fosters engagement, and strengthens customer retention.",
    },
    {
      title: "Seamless App Migration",
      description:
        "Switch to Flutter effortlessly with our expert migration and upgrade services. We enhance your app’s performance and provide advanced features for improved control and scalability.",
    },
    {
      title: "Reliable Support Services",
      description:
        "At KLobTech, we go beyond development by offering dedicated maintenance and support. Keep your Flutter app running smoothly with regular updates, feature enhancements, and expert assistance.",
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
              <img src={flutterImg} alt="Flutter" className="serviceHeroImg" />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">Flutter Development</h1>
              </div>

              <p className="heroDescription">
                At KLobTech, we are proud to be a trusted name in Flutter app
                development. Our skilled in-house Flutter development team
                specializes in turning your ideas into powerful, feature-rich
                applications. Whether you need custom app solutions or seamless
                cross-platform development, we deliver top-quality results at
                competitive prices. Searching for a reliable partner to bring
                your vision to life? Look no further! With KLobTech, your
                journey to exceptional app development begins today. Let’s build
                something extraordinary together!
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
                Why Choose KLobTech for Flutter Development?
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
              <div className="w-40 h-40">
                <img
                  src={flutterImg}
                  alt="Mobile App Icon"
                  className="mobileHeroImg"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  <span className="text-[#333333]">Flutter Development</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  At KLobTech, we are proud to be a trusted name in Flutter app
                  development. Our skilled in-house Flutter development team
                  specializes in turning your ideas into powerful, feature-rich
                  applications. Whether you need custom app solutions or
                  seamless cross-platform development, we deliver top-quality
                  results at competitive prices. Searching for a reliable
                  partner to bring your vision to life? Look no further! With
                  KLobTech, your journey to exceptional app development begins
                  today. Let’s build something extraordinary together!
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

export default Flutter;