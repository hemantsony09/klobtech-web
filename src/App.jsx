import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from "./Navigation";
// import Hero from "./Hero";
// import Circle from "./Circle";
// import CircleMotion from "./CircleMotion";
// import RevolvingCircle from "./RevolvingCircle";
// import MainCircle from "./Orbit";
// import Information from "./Information";
// import Services from "./Services";
// import ServicesTest from "./ServicesTest";
// import BlurBox from "./BlurBox";
// import CursorFollower from "./CursorFollower";
// import Testimonials from "./Testimonials";
// import AnimatedNavbar from "./AnimatedNavbar";
import Emp from "./Emp";
import Home from "./Home";
import Mad from "./Mobile-Development/MobileAndroidDevelopment";
import Fsd from "./Web-Development/FullStackDevelopment";
import Amd from "./services/Amd";
import Btbs from "./services/Btbs";
import Lgsa from "./services/Lgsa";
import Mce from "./services/Mce";
import Rs from "./services/Rs";
import Ps from "./services/Ps";
import React from "./Mobile-Development/React";
import Flutter from "./Mobile-Development/Flutter";
import Native from "./Mobile-Development/Native";
import Ios from "./Mobile-Development/Ios";
import FAQPage from "./Faq";
// import ScrollToTop from "./Components/ScrollToTop";
import Reactjs from "./Web-Development/React";
import Python from "./Web-Development/Python";
import Angular from "./Web-Development/Angular";
import Node from "./Web-Development/Node";
import Php from "./Web-Development/Php";
import Aiml from "./Web-Development/Aiml";
import Cms from "./CMSService/Cmservices";
import Shopify from "./CMSService/Shopify";
import Wordpress from "./CMSService/Wordpress";
import Ecommerce from "./services/Ecommerce";
import Education from "./services/Education";
import Digitalmarketing from "./digitalmarketing/Digitalmarketing";
import ContactUs from "./ContactUs";
import Tac from "./tac";
import Career from "./Career/Career";
import AboutUs from "./AboutUs";
import Hiring from "./Hiring/HiringForm";
import HiringTable from "./Hiring/HiringTable";
import Admin from "./Admin/Admin";
import ApplyPage from "./Admin/component/ApplyPage"
import ShortlistedPage from "./Admin/component/ShortlistedPage";

function App() {
  return (
    <>
      <Router>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/tac" element={<Tac />} />
          <Route path="/career" element={<Career />} />

          <Route path="/emp" element={<Emp />} />
          <Route path="/mad" element={<Mad />} />
          <Route path="/mad/react" element={<React />} />
          <Route path="/mad/flutter" element={<Flutter />} />
          <Route path="/mad/android" element={<Native />} />
          <Route path="/mad/ios" element={<Ios />} />

          <Route path="/fullStackDevelopment" element={<Fsd />} />
          <Route path="/fullStackDevelopment/react" element={<Reactjs />} />
          <Route path="/fullStackDevelopment/node" element={<Node />} />
          <Route path="/fullStackDevelopment/aiml" element={<Aiml />} />
          <Route path="/fullStackDevelopment/python" element={<Python />} />
          <Route path="/fullStackDevelopment/angular" element={<Angular />} />
          <Route path="/fullStackDevelopment/php" element={<Php />} />

          <Route path="/cms" element={<Cms />} />
          <Route path="/cms/shopify" element={<Shopify />} />
          <Route path="/cms/wordpress" element={<Wordpress />} />

          <Route path="/btbs" element={<Btbs />} />
          <Route path="/recruitment" element={<Rs />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/education" element={<Education />} />
          <Route path="/digitalmarketing" element={<Digitalmarketing />} />

          <Route path="/services/Amd" element={<Amd />} />
          <Route path="/services/Lgsa" element={<Lgsa />} />
          <Route path="/services/Mce" element={<Mce />} />
          <Route path="/services/Rs" element={<Rs />} />
          <Route path="/services/Ps" element={<Ps />} />
          <Route path="/hiring/apply" element={<Hiring />} />
          <Route path="/hiring" element={<HiringTable />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/apply/:id" element={<ApplyPage />} />
          <Route path="/shortlisted/:id" element={<ShortlistedPage />} />
        </Routes>
      </Router>
    </>
  );
}
// function App() {
//   return (
//     <Router>
//       <Layout />
//       <Routes>
//         <Route path="/emp" element={<Emp />} />
//         {/* Add other routes if needed */}
//       </Routes>
//     </Router>
//   );
// }

export default App;
