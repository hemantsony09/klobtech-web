
import { Link } from "react-router-dom"; // Import Link from React Router
import { Helmet } from "react-helmet-async"; // For SEO meta tags

// Importing images properly
import cmsImg from "./CMSService/assets/cms.png";
import webdevImg from "./Web-Development/Assets/webdev.png";
import mobileImg from "./Mobile-Development/assets/mobile.png";
import btbsImg from "./services/assets/b2b.png";
import recruitImg from "./services/assets/recruitment.png";
import ecommerceImg from "./services/assets/ecommerce.png";
import educationImg from "./services/assets/education.png";
import digitalImg from "./digitalmarketing/assets/digital.png";

const services = [
  {
    id: 1,
    image: mobileImg,
    title: "Mobile App Development",
    link: "/mad",
    description: "Explore our mobile app development services to build scalable and user-friendly applications."
  },
  {
    id: 2,
    image: webdevImg,
    title: "Full Stack Development",
    link: "/fullStackDevelopment",
    description: "Learn about our full-stack development expertise, covering front-end and back-end solutions."
  },
  {
    id: 3,
    image: digitalImg,
    title: "Digital Marketing",
    link: "/digitalmarketing",
    description: "Boost your online presence with our digital marketing strategies."
  },
  { 
    id: 4, 
    image: cmsImg, 
    title: "CMS Services", 
    link: "/cms",
    description: "Discover our CMS solutions for content management and workflow automation."
  },
  { 
    id: 5, 
    image: btbsImg, 
    title: "B2B Services", 
    link: "/btbs",
    description: "Enhance your business operations with our B2B services."
  },
  {
    id: 6,
    image: recruitImg,
    title: "Recruitment Services",
    link: "/recruitment",
    description: "Find top talent with our recruitment solutions tailored to your industry."
  },
  { 
    id: 7, 
    image: ecommerceImg, 
    title: "Ecommerce", 
    link: "/ecommerce",
    description: "Launch and grow your eCommerce store with our expert solutions."
  },
  { 
    id: 8, 
    image: educationImg, 
    title: "Education", 
    link: "/education",
    description: "Explore our education technology services for learning management systems."
  },
];

const ServicePanel = () => {
  return (
    <div className="bg-[#fbfbfb] p-6">
      {/* Helmet for SEO Meta Tags */}
      <Helmet>
        <title>Our Services | Web & App Development, Digital Marketing</title>
        <meta name="description" content="Explore our range of services including mobile and web development, digital marketing, CMS solutions, and more." />
        <meta name="keywords" content="Web Development, Mobile App Development, SEO, Digital Marketing, CMS, Recruitment" />
        <meta name="author" content="YourCompanyName" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web & App Development Services",
            "provider": {
              "@type": "Organization",
              "name": "YourCompanyName"
            },
            "serviceType": "Software Development",
            "description": "Our services include mobile and web development, digital marketing, and CMS solutions.",
            "areaServed": "Worldwide"
          }`}
        </script>
      </Helmet>

      {/* Heading Section */}
      <h2 className="text-center mb-8 font-bold uppercase">
        <span className="block text-5xl md:text-5xl pb-4">
          Our <span className="text-[#0dc7ae]">Services</span> Include
        </span>
        <span className="block text-3xl md:text-3xl text-gray-600">
          But Are Not Limited To
        </span>
      </h2>

      {/* Responsive Services Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 justify-items-center">
        {services.map((service) => (
          <Link 
            to={service.link} 
            key={service.id} 
            className="group"
            aria-label={`Learn more about ${service.title}`} 
            title={`Learn more about ${service.title}`}
          >
            {/* Link wrapper around card */}
            <div
              className="bg-[#f5f5f7] rounded-[3rem] flex flex-col items-center justify-between px-6 py-10 w-[330px] h-[270px] shadow-sm 
              transition-transform duration-300 hover:shadow-xl hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-28 h-28 mb-4"
              />
              <h3 className="text-center text-3xl font-semibold mb-4 text-[#333333]">
                {service.title}
              </h3>
              <button 
                className="bg-[#0dc7ae] text-white px-10 py-3 rounded-full text-lg font-medium shadow-md hover:bg-[#0bb99d] transition-all"
                aria-label={`Read more about ${service.title}`}
              >
                Learn More
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-center mt-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
          Have something else in your mind?
        </h3>
        <h4 className="text-2xl md:text-3xl text-gray-600 mb-6">
          Reach out to us.
        </h4>
        <Link to="/contact">
          <button className="bg-[#0dc7ae] text-white px-10 py-3 rounded-full text-lg font-medium shadow-md hover:bg-[#0bb99d] transition-all">
            Click Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicePanel;
