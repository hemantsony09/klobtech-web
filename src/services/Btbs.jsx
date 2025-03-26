
  import Footer from "../Components/Footer";
  import Navbar from "../Nav/Navbar";
  import { useMediaQuery } from "react-responsive";
  import ScrollToTop from "../Components/ScrollToTop";
  import Logo from "../Components/logo";
  import Mobilefooter from "../Mobilefooter";
  import btbImg from "./assets/b2b.png";
  import { motion } from "framer-motion";
  import BackToTopButton from "../BackToTopButton";
  
  import "./Services.css";
  
  function Btbs() {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const features = [
      {
        title: "Company Technography",
        description:
          "KLobTech utilizes advanced technologies in full-stack development, mobile apps, cloud computing, and data management to deliver scalable IT solutions.",
      },
      {
        title: "Company Firmography",
        description:
          "We provide customized IT solutions for startups to enterprises across industries like tech, e-commerce, and finance, focusing on web and mobile app development.",
      },
      {
        title: "End-to-End Development",
        description:
          "Our research services provide actionable insights into market trends and customer behavior, helping businesses optimize strategies and make informed decisions.",
      },
      {
        title: "Accelerated MVP Delivery",
        description:
          "We developed a custom mobile app for a retail client, improving user engagement by 30% through seamless integration with inventory and payments.",
      },
      {
        title: "Cross-Platform Expertise",
        description:
          "KLobTech creates data-driven marketing strategies focused on ROI, using performance marketing, content, and SEO to boost brand visibility and drive conversions.",
      },
      {
        title: "Seamless App Migration",
        description:
          "We help B2B advertisers reach decision-makers with targeted campaigns, maximizing ad spend and delivering measurable business results.",
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
                  src={btbImg}
                  alt="B2B Services"
                  style={{ height: "40rem", width: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="heroInfo">
                <div className="heroTitleArea">
                  <h1 className="heroTitle">B2B Services</h1>
                </div>
  
                <p className="heroDescription">
                  At KLobTech, we specialize in providing comprehensive B2B
                  services that empower businesses to optimize their operations
                  and achieve sustainable growth.
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
                  Why Choose KLobTech for B2B Services?
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
            <ScrollToTop />
            <BackToTopButton />
  
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
                    src={btbImg}
                    alt="B2B Services"
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
                    <span className="text-[#333333]">B2B Services</span>
                  </h1>
                  <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                    At KLobTech, we specialize in providing comprehensive B2B
                    services that empower businesses to optimize their operations
                    and achieve sustainable growth.
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
                Why Choose <span className="text-teal-500">KLobTech</span> for B2B
                Services?
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
  
  export default Btbs;