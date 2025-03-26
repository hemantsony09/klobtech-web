import { motion } from "framer-motion";
import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import nodeImg from "./Assets/node.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

function Node() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const features = [
    {
      title: "Custom Node.js App Development",
      description:
        "Unlock the full potential of custom Node.js app development with KLobTech. Our skilled Node.js developers specialize in creating bespoke web and mobile applications that address your unique business requirements.",
    },
    {
      title: "Node.js Web Development",
      description:
        "Enhance your online presence with our premium Node.js web development services. We integrate modern features and robust security standards, ensuring your digital footprint is secure and high-performing.",
    },
    {
      title: "Real-Time Apps Development",
      description:
        "Create dynamic, real-time web applications with our Node.js expertise. Whether it's single-page applications (SPAs), collaboration tools, or chat apps, we deliver solutions tailored to your business needs.",
    },
    {
      title: "API Development and Integration",
      description:
        "Our experienced Node.js developers craft powerful, feature-rich APIs and provide seamless integration with other systems. We ensure your APIs are reliable and fit perfectly with your business processes.",
    },
    {
      title: "Node.js Migration Services",
      description:
        "Planning to migrate your application or website to Node.js? We provide smooth and efficient migration services, ensuring a hassle-free transition with minimal disruption to your operations.",
    },
    {
      title: "Node.js Plugin Development",
      description:
        "We develop custom, feature-rich Node.js plugins that integrate seamlessly with your web or mobile application, enhancing its functionality and performance for your business success.",
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
                src={nodeImg}
                alt="Node.js Development"
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
                <h1 className="heroTitle">Node JS Development</h1>
              </div>

              <p className="heroDescription">
                Upgrade your digital solutions with KLobTech, a leading Node.js
                development company. Our expert Node.js developers work closely
                with you to understand your business needs, delivering robust,
                scalable, and modern web and mobile applications. By partnering
                with our skilled team, you gain enhanced scalability, improved
                productivity, and long-term value for your web and app
                solutions. Choose KLobTech for tailored, high-quality
                development services that drive business success.
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
                Why Choose KLobTech for Node JS Development?
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
                  src={nodeImg}
                  alt="Node.js Development"
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
                  <span className="text-[#333333]">Node JS Development</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  Upgrade your digital solutions with KLobTech, a leading
                  Node.js development company. Our expert Node.js developers
                  work closely with you to understand your business needs,
                  delivering robust, scalable, and modern web and mobile
                  applications. By partnering with our skilled team, you gain
                  enhanced scalability, improved productivity, and long-term
                  value for your web and app solutions. Choose KLobTech for
                  tailored, high-quality development services that drive
                  business success.
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
              Why Choose <span className="text-teal-500">KLobTech</span> for
              Node JS Development?
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

export default Node;