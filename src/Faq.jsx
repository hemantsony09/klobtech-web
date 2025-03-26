import { useState } from "react";
import "./Faq.css";
import faqImg from "./assets/faq.png";
import Navbar from "./Nav/Navbar";
import Footer from "./Components/Footer";
import Logo from "./Components/logo";
import FAQContact from "./Components/FAQContact";
import Mobilefooter from "./Mobilefooter";
import { useMediaQuery } from "react-responsive";
import BackToTopButton from "./BackToTopButton";
import {motion} from 'framer-motion';
const FAQPage = ({ accentColor = "#0dc7ae" }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [activeIndex, setActiveIndex] = useState(null);

  const getAccentClasses = () => {
    const colors = {
      blue: "accent-blue",
      green: "accent-green",
      purple: "accent-purple",
      red: "accent-red",
      indigo: "accent-indigo",
    };
    return colors[accentColor] || colors.blue;
  };

  const faqs = [
    {
      question:
        "What services does KLobTech offer in mobile and web development?",
      answer:
        "We specialize in delivering high-quality, secure, and cost-effective mobile and web app development services, ensuring user-friendly solutions tailored to businesses worldwide.",
    },
    {
      question:
        "What makes KLobTech a reliable choice for web and app development?",
      answer:
        "Our dedication to precision, innovation, and quality, along with a team of skilled professionals, ensures customized solutions aligned with your business goals. We maintain open communication to foster transparency and trust.",
    },
    {
      question: "What is KLobTech’s vision and mission?",
      answer:
        "Our vision is to be your key to success by providing top-notch software and web services with a focus on quality, efficiency, and timely delivery. Our mission is to exceed your expectations by empowering our team to deliver superior performance and accelerate your business's growth.",
    },
    {
      question: "What industries or platforms does KLobTech specialize in?",
      answer:
        "Since 2021, we have worked on platforms like Python, UI/UX design, and graphic designing, constantly enhancing our expertise to deliver exceptional solutions.",
    },
    {
      question:
        "How does KLobTech ensure ethical work practices and client satisfaction?",
      answer:
        "Our ethical work ethos, built on dignity and respect, fosters strong client relationships and employee development. We prioritize delivering results that elevate your business while maintaining integrity.",
    },
    {
      question: "What opportunities does KLobTech provide for career growth?",
      answer:
        "We empower careers by offering dynamic job opportunities and fostering an environment of growth for professionals seeking to thrive in the IT industry.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accentClass = getAccentClasses();

  return (
    <>
      {!isMobile && <Logo></Logo>}
      <BackToTopButton></BackToTopButton>
      <Navbar></Navbar>
      <div className="faq-page-container">
        <motion.div  initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
       className="faq-card">
          <div className="image-section">
            <img src={faqImg} alt="FAQ Illustration" className="faq-image" />
          </div>
          <div className="faq-section">
            <motion.h1 className="faq-title">Frequently Asked Questions</motion.h1>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div  key={index} className="faq-item">
                  <div  
                    onClick={() => toggleFAQ(index)}
                    className={`faq-question transition-all duration-500 ease-in-out ${
                      activeIndex === index ? accentClass : ""
                    }`}
                  >
                    <h3>{faq.question}</h3>
                    <span>{activeIndex === index ? "−" : "+"}</span>
                  </div>

                 <div  
                 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index ? "max-h-[200px] opacity-100 p-4 bg-gray-50" : "max-h-0 opacity-0"
                  }`}
                >
                    <div className="faq-answer-content">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <FAQContact></FAQContact>
      {!isMobile && <Footer></Footer>}
      {isMobile && <Mobilefooter></Mobilefooter>}
    </>
  );
};

export default FAQPage;
