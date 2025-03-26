import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import wordpressImg from "./assets/wordpress.png";
import ScrollToTop from "../Components/ScrollToTop";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";
import { motion } from "framer-motion";

function Wordpress() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const features = [
    {
      title: "WordPress Development",
      description:
        "At KLobTech, we create custom WordPress solutions tailored to your unique business needs, helping you connect with your audience and achieve success.",
    },
    {
      title: "Theme Development",
      description:
        "Our developers specialize in designing and customizing WordPress themes that reflect your brand’s identity, providing a polished, user-friendly experience.",
    },
    {
      title: "Custom Plugin Development",
      description:
        "KLobTech offers customized WordPress plugin development to enhance your website’s functionality, improve operations, and engage users more effectively.",
    },
    {
      title: "WooCommerce Development",
      description:
        "Our WooCommerce development services focus on creating custom solutions that optimize your store’s features and improve customer engagement for better e-commerce performance.",
    },
    {
      title: "Website Maintenance",
      description:
        "We provide ongoing maintenance and support for WordPress websites, ensuring your site stays secure, up-to-date, and fully functional. Our team is always available to address issues promptly and implement the latest updates for optimal performance.",
    },
    {
      title: "WordPress SEO Optimization",
      description:
        "Increase visibility and drive more traffic with KLobTech’s WordPress SEO services, designed to improve rankings and boost conversions.",
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
                src={wordpressImg}
                alt="WordPress Development"
              />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">WordPress Services</h1>
              </div>

              <p className="heroDescription">
                At KLobTech, we specialize in building custom WordPress
                websites, plugins, and themes tailored to meet your business's
                specific needs, helping you connect with your audience and
                achieve success.
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
                Why Choose KLobTech for WordPress Development?
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
                  src={wordpressImg}
                  alt="WordPress Development"
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
                  <span className="text-[#333333]">WordPress Services</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  At KLobTech, we specialize in building custom WordPress
                  websites, plugins, and themes tailored to meet your business's
                  specific needs, helping you connect with your audience and
                  achieve success.
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
              WordPress Development?
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

export default Wordpress;