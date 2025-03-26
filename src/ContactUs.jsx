
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "./Nav/Navbar";
import FAQContact from "./Components/FAQContactQuestion";
import ScrollToTop from "./Components/ScrollToTop";
import BackToTopButton from "./BackToTopButton";
import { motion } from "framer-motion";

function ContactUs() {
  const contactMethods = [
    {
      icon: (
        <Mail className="w-10 h-10 md:w-12 md:h-12" />
      ),
      title: "Email Us",
      content: "info@klobtech.com",
      subtext: "We'll respond within 24 hours",
      address:
        "mailto:info@klobtech.com?subject=Inquiry&body=Hello, I would like to know more about your work...",
    },
    {
      icon: (
        <Phone className="w-10 h-10 md:w-12 md:h-12" />
      ),
      title: "Call Us",
      content: "+919024790200",
      subtext: "Monday to Friday, 9AM-6PM",
      address: "tel:+919024790200",
    },
    {
      icon: (
        <MapPin className="w-10 h-10 md:w-12 md:h-12" />
      ),
      title: "Visit Our HQ",
      content:
        "H-248c, Riico Ind. Area, Road No. 2. Mansarovar, Jaipur, Rajasthan, India",
      subtext: "Get directions on Google Maps",
      address:
        "https://maps.app.goo.gl/hm96Fzcc7Cm3ByBZ8",
    },
    {
      icon: (
        <MapPin className="w-10 h-10 md:w-12 md:h-12" />
      ),
      title: "Visit Our Office",
      content:
        "5th Floor, Jaipur Electronic Market, Near Riddhi Siddhi Circle, Gopalpura Bypass Road,\nJaipur, Rajasthan, India 302018",
      subtext: "Get directions on Google Maps",
      address:
        "https://maps.app.goo.gl/sxv4K81vq5x3jCBr9",
    },
  ];

  return (
    <>
      <BackToTopButton />
      <ScrollToTop />
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-10 sm:p-16 lg:p-24"
      >
        <main className="max-w-[120rem] mx-auto">
          <div className="flex flex-col items-center text-center mb-16 lg:mb-28">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 mb-6 sm:mb-10">
              Get in <span className="text-[#25ccb6]">Touch</span>
            </h1>
            <p className="text-lg sm:text-2xl lg:text-3xl text-gray-600 max-w-5xl">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-14">
            {contactMethods.map((method, index) => (
              <motion.a
                href={method.address}
                target="_blank"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="block"
              >
                <div
                  className="group p-8 sm:p-12 rounded-3xl bg-white/80 backdrop-blur-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 w-fit mb-8 sm:mb-12 text-[#25ccb6] group-hover:bg-blue-100 transition-colors duration-300">
                    {method.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 sm:mb-5">
                    {method.title}
                  </h2>
                  <p className="text-lg sm:text-2xl text-gray-800 font-medium mb-3 sm:mb-5 whitespace-pre-line hover:text-[#25ccb6] flex-grow">
                    {method.content}
                  </p>
                  <p className="text-base sm:text-lg text-gray-500">
                    {method.subtext}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </main>
      </motion.div>

      <FAQContact />
    </>
  );
}

export default ContactUs;