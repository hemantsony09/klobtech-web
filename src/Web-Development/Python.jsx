import { motion } from "framer-motion";
import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import pythonImg from "./Assets/python.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

function Python() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const features = [
    {
      title: "Custom Python Solutions",
      description:
        "KLobTech specializes in crafting tailored Python applications using core language features and open-source models. Our dynamic, flexible solutions are designed to meet the diverse needs of both web and mobile development.",
    },
    {
      title: "Python Web Development",
      description:
        "Explore our range of Python web development services, where we create customized websites, cloud applications, and data-intensive solutions. We specialize in building highly functional content management systems and more.",
    },
    {
      title: "Tailored Python Development",
      description:
        "Leveraging Python's extensive community library, we deliver custom application development solutions that align with your unique business needs and goals.",
    },
    {
      title: "CMS Development Services",
      description:
        "We create user-friendly and highly functional content management systems using advanced Python frameworks like Django, Flask, and Wagtail.",
    },
    {
      title: "Python Hybrid Programming",
      description:
        "Our team integrates Python with other languages like Java, C/C++, and C# for advanced customizations, enhancing functionality and enabling seamless hybrid programming.",
    },
    {
      title: "Upgrades & Migration",
      description:
        "Our expert team ensures smooth migration to Python, utilizing frameworks like Django, and helps with upgrading Python applications from version 2 to version 3, ensuring scalability and performance.",
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
                src={pythonImg}
                alt="Python Development"
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
                <h1 className="heroTitle">Python Development</h1>
              </div>

              <p className="heroDescription">
                KLobTech is your trusted partner for Python web development. Our
                expert team creates tailored Python solutions, delivering
                powerful web applications that align with your business needs.
                Specializing in Django web development, we provide top-quality
                services that enhance scalability and efficiency. Whether you're
                a startup or an enterprise, our experienced Python developers
                are dedicated to ensuring your success. If you're considering
                outsourcing Django development, you're in the right place.
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
                Why Choose KLobTech for Python Development?
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
                  src={pythonImg}
                  alt="Mobile App Icon"
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
                  <span className="text-[#333333]">Python Development</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  KLobTech is your trusted partner for Python web development.
                  Our expert team creates tailored Python solutions, delivering
                  powerful web applications that align with your business needs.
                  Specializing in Django web development, we provide top-quality
                  services that enhance scalability and efficiency. Whether
                  you're a startup or an enterprise, our experienced Python
                  developers are dedicated to ensuring your success. If you're
                  considering outsourcing Django development, you're in the
                  right place.
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
              Python Development?
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

export default Python;