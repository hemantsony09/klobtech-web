import { Construction } from "lucide-react";
import Navbar from "./Nav/Navbar";
import Footer from "./Components/Footer";
import Mobilefooter from "./Mobilefooter";
import { useMediaQuery } from "react-responsive";
import ScrollToTop from "./Components/ScrollToTop";

function Development() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div className="min-h-[368px] bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <Construction className="w-12 h-12 text-gray-600 mx-auto" />
          <h1 className="text-2xl font-semibold text-gray-800">
            Under Maintenance
          </h1>
          <p className="text-gray-600">
            We're making improvements. Please check back soon!
          </p>
        </div>
      </div>
      {isMobile && <Mobilefooter></Mobilefooter>}

      {!isMobile && <Footer></Footer>}
    </>
  );
}

export default Development;
