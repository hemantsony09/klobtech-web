import Navigation from "./Navigation";
import Hero from "./Hero";
import Circle from "./Circle";
// import CircleMotion from "./CircleMotion";
// import RevolvingCircle from "./RevolvingCircle";
import MainCircle from "./Orbit";
import Information from "./Information";
import Services from "./Services";
import ServicesTest from "./ServicesTest";
import BlurBox from "./BlurBox";
import CursorFollower from "./CursorFollower";
import Testimonials from "./Testimonials";
// import Navbar from "./StaffingSolutions";
import Faq from "./Faq";
import Footer from "./Components/Footer";
import FAQPage from "./Faq";
import Navbarr from "./Testnav";
import BackToTopButton from "./BackToTopButton";
import { useMediaQuery } from "react-responsive";
import Navbar from "./Nav/Navbar";
import Review from "./Review";
import ReviewCarousel from "./ReviewCarousel";
import Logo from "./Components/logo";
import Mobilefooter from "./Mobilefooter";
import ServicesShowcase from "./ServicesShowcase";
import Navvv from "./NewNav";
import ServiceList from "./Components/MobileServices/ServiceList";
import MobServices from "./MobServices";

function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {!isMobile && <Logo></Logo>}

      {!isMobile && (
        <Circle top={"15rem"} left={"-10rem"} color={"#333"} scale={1} />
      )}

      {!isMobile && (
        <Circle
          top={"30rem"}
          left={"3rem"}
          color={"var(--accent-color)"}
          scale={0.3}
        />
      )}

      {!isMobile && (
        <Circle top={"80rem"} left={"20rem"} color={"#333"} scale={1} />
      )}

      {isMobile && (
        <Circle top={"52rem"} left={"20rem"} color={"#333"} scale={0.6} />
      )}

      {/* <BlurBox></BlurBox> */}
      <Navbar></Navbar>
      {/* <Navvv></Navvv> */}
      {/* <Navigation /> */}
      <Hero />
      {isMobile && (
        <MainCircle
          mainRadius={160}
          childRadius1={20}
          childRadius2={40}
          distance1={240}
          distance2={205}
          speed1={9}
          speed2={10}
          top={"10rem"}
          left={"-15rem"}
          color1={"#333"}
          color2={"var(--accent-color)"}
        />
      )}
      {!isMobile && (
        <MainCircle
          mainRadius={500}
          childRadius1={20}
          childRadius2={80}
          distance1={650}
          distance2={550}
          speed1={9}
          speed2={10}
          top={"20rem"}
          left={"140rem"}
          color1={"#333"}
          color2={"var(--accent-color)"}
        />
      )}
      {/* <MainCircle
        mainRadius={500}
        childRadius1={20}
        childRadius2={80}
        distance1={650}
        distance2={550}
        speed1={9} // Speed of the first circle (faster)
        speed2={5} // Speed of the second circle (slower)
      /> */}
      <Information></Information>

      {!isMobile && <Services></Services>}
      {isMobile && <MobServices></MobServices>}

      {/* <AnimatedNavbar></AnimatedNavbar> */}
      {/* <Review></Review> */}
      {/* <ReviewCarousel></ReviewCarousel> */}
      { <Testimonials></Testimonials>}

      {/* <CardGrid></CardGrid> */}
      {/* <FAQPage></FAQPage> */}
      {!isMobile && <Footer></Footer>}
      <BackToTopButton></BackToTopButton>

      {isMobile && <Mobilefooter></Mobilefooter>}
      {/* <ServicesShowcase></ServicesShowcase> */}
    </>
  );
}

export default Home;
