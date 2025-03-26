import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import recruitmentImg from "./assets/recruitment.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import ScrollToTop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";
import { motion } from "framer-motion";

function Rs() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const features = [
    {
      title: "Permanent Talent Acquisition",
      description:
        "Our approach identifies candidates who align with your needs and long-term vision, helping you secure talent that drives growth and success.",
    },
    {
      title: "Project Staffing",
      description:
        "We focus on finding the right fit for both short-term and long-term projects, ensuring compatibility and the ideal match for your team.",
    },
    {
      title: "Consultant Advisory",
      description:
        "We specialize in matching our clients with experienced and dedicated long-term consultants who seamlessly integrate into your organization.",
    },
    {
      title: "Temporary Staffing Solutions",
      description:
        "We provide skilled professionals for short-term needs, ensuring immediate productivity and seamless transitions to keep your projects on track.",
    },
    {
      title: "Executive Search",
      description:
        "For leadership roles and critical positions, we focus on finding top-tier talent with the expertise and vision to drive your company forward.",
    },
    {
      title: "Talent Pool Management",
      description:
        "We build and maintain a talent pool aligned with your business needs, giving you quick access to top candidates when the time comes.",
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

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="serviceHero"
          >
            <div>
              <img
                src={recruitmentImg}
                alt="Recruitment"
                className="serviceHeroImg"
              />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">Recruitment Services</h1>
              </div>

              <p className="heroDescription">
                At KLobTech, we offer comprehensive recruitment services to help
                businesses find the right talent for their needs. Our
                experienced team specializes in sourcing, screening, and placing
                skilled professionals across various industries. Whether you're
                looking for temporary, permanent, or contract staffing
                solutions, we tailor our approach to ensure a perfect match
                between candidates and your business culture. With a focus on
                quality and efficiency, we help you build strong, capable teams
                that drive success and growth.
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
                Why Choose KLobTech for Recruitment Services?
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
          <ScrollToTop />
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
                  src={recruitmentImg}
                  alt="Mobile Recruitment"
                  className="mobileHeroImg"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  <span className="text-[#333333]">Recruitment Services</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  At KLobTech, we offer comprehensive recruitment services to
                  help businesses find the right talent for their needs. Our
                  experienced team specializes in sourcing, screening, and
                  placing skilled professionals across various industries.
                  Whether you're looking for temporary, permanent, or contract
                  staffing solutions, we tailor our approach to ensure a perfect
                  match between candidates and your business culture.
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
              Recruitment Services?
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

export default Rs;