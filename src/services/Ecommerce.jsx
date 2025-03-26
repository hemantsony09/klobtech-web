import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import ecommerceImg from "./assets/ecommerce.png";
import ScrollToTop from "../Components/ScrollToTop";
import { useMediaQuery } from "react-responsive";
import Mobilefooter from "../Mobilefooter";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";
import { motion } from "framer-motion";
import "./Services.css";

function Ecommerce() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const features = [
    {
      title: "Product Listing",
      description:
        "Creating engaging, SEO-friendly product listings with compelling titles, detailed descriptions, and high-quality images to attract the right audience.",
    },
    {
      title: "Keyword Optimization",
      description:
        "Improving visibility with targeted keywords that rank your products higher and drive more traffic to your listings.",
    },
    {
      title: "Listing Health Optimization",
      description:
        "Optimizing listing quality by addressing inventory, pricing, and compliance to ensure consistent visibility and performance.",
    },
    {
      title: "Deep Data Analysis",
      description:
        "Leveraging advanced analytics to uncover actionable insights and trends. From customer behavior to sales metrics, we provide data-driven strategies to optimize your e-commerce performance.",
    },
    {
      title: "FBA Services",
      description:
        "Simplifying fulfillment with support for inventory, shipping, and returns, leveraging Amazon’s logistics for faster deliveries.",
    },
    {
      title: "Performance Marketing",
      description:
        "Boosting your sales with targeted ad campaigns and ROI-driven marketing strategies. We help you maximize your advertising budget by reaching the right audience at the right time.",
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
                src={ecommerceImg}
                alt="Ecommerce"
                className="serviceHeroImg"
              />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">Ecommerce Services</h1>
              </div>

              <p className="heroDescription">
                At KLobTech, we specialize in delivering innovative IT solutions
                tailored to the dynamic needs of the e-commerce industry. From
                scalable website development to seamless payment integration and
                secure data management, we empower businesses to enhance their
                online presence and drive customer engagement.
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
                Why Choose KLobTech for Ecommerce Services?
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
                  src={ecommerceImg}
                  alt="Ecommerce Mobile"
                  className="mobileHeroImg"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  <span className="text-[#333333]">Ecommerce Services</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  At KLobTech, we specialize in delivering innovative IT
                  solutions tailored to the dynamic needs of the e-commerce
                  industry. From scalable website development to seamless
                  payment integration and secure data management, we empower
                  businesses to enhance their online presence and drive customer
                  engagement.
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
              Ecommerce Services?
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

export default Ecommerce; 