import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import shopifyImg from "./assets/shopify.png";
import ScrollToTop from "../Components/ScrollToTop";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";
import { motion } from "framer-motion";

function Shopify() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const features = [
    {
      title: "Custom Shopify Store",
      description:
        "KLobTech specializes in building fully customized Shopify stores designed to reflect your unique brand, engage your audience, and meet your business goals for an exceptional shopping experience.",
    },
    {
      title: "Shopify Theme Design",
      description:
        "Our skilled designers create or customize Shopify themes that highlight your brand identity, ensuring a visually stunning, user-friendly, and mobile-optimized design.",
    },
    {
      title: "Shopify App Integration",
      description:
        "We enhance your Shopify store's functionality by integrating essential apps, including payment gateways, marketing tools, CRM solutions, and more, to elevate sales and customer engagement.",
    },
    {
      title: "Shopify SEO Services",
      description:
        "Our Shopify SEO services optimize your store to improve search engine rankings, driving organic traffic and increasing visibility to help your business reach a wider audience.",
    },
    {
      title: "Shopify Migration Services",
      description:
        "Looking to migrate to Shopify? KLobTech offers seamless migration services that ensure a smooth transition with no data loss, minimal downtime, and preserved SEO performance.",
    },
    {
      title: "Shopify Support",
      description:
        "We provide ongoing maintenance and support to ensure your Shopify store runs smoothly. Our services include security updates, performance optimization, and troubleshooting to keep your store at its best.",
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
                style={{ height: "40rem", width: "100%", objectFit: "cover" }}
                src={shopifyImg}
                alt="Shopify Development"
              />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">Shopify Services</h1>
              </div>

              <p className="heroDescription">
                Choose KLobTech for top-tier Shopify development services. Our
                expertise lies in building personalized, high-performance
                Shopify stores that enhance user experience and drive
                conversions. As a leading Shopify development company, we offer
                seamless app integrations and optimization strategies to help
                your business succeed in the competitive e-commerce space.
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
                Why Choose KLobTech for Shopify Development?
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
                  src={shopifyImg}
                  alt="Shopify Development"
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
                  <span className="text-[#333333]">Shopify Services</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  Choose KLobTech for top-tier Shopify development services. Our
                  expertise lies in building personalized, high-performance
                  Shopify stores that enhance user experience and drive
                  conversions. As a leading Shopify development company, we
                  offer seamless app integrations and optimization strategies to
                  help your business succeed in the competitive e-commerce
                  space.
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
              Shopify Development?
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

export default Shopify;