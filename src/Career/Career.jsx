import React from "react";
import { Building2, Users, Sparkles } from "lucide-react";
import Navbar from "../Nav/Navbar";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Footer from "../Components/Footer";
import Logo from "../Components/logo";
import ScrollToTop from "../Components/ScrollToTop";

const CareersPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <ScrollToTop></ScrollToTop>
      {!isMobile && <Logo></Logo>}
      <Navbar></Navbar>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-white">
          <div className="mx-auto max-w-[1680px] px-12 py-48 sm:py-56 lg:px-14">
            <div className="flex flex-col items-center text-center">
              <Sparkles className="h-24 w-24 text-[#25ccb6] mb-12" />
              <h1 className="text-7xl font-bold tracking-tight text-gray-900 sm:text-9xl mb-12">
                Join Our Journey to Excellence
              </h1>
              <p className="mt-6 text-3xl leading-relaxed text-gray-600 max-w-[1440px]">
                We're building something special – a place where innovation
                meets passion, where every team member's unique perspective
                shapes our future. Join us in creating meaningful impact while
                growing personally and professionally in an environment that
                celebrates creativity and collaboration.
              </p>
              <div className="mt-16 flex items-center justify-center gap-16">
                <div className="flex flex-col items-center">
                  <Building2 className="h-14 w-14 text-[#25ccb6]" />
                  <p className="mt-5 text-2xl font-medium">Flexible Work</p>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-14 w-14 text-[#25ccb6]" />
                  <p className="mt-5 text-2xl font-medium">Great Culture</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs Section */}
        <div className="mx-auto max-w-[1680px] px-12 py-28 sm:py-48 lg:px-14">
          <div className="text-center">
            <h2 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              Open Positions
            </h2>
            <p className="mt-10 text-3xl leading-relaxed text-gray-600">
              Discover your next opportunity with us
            </p>
          </div>

          <div className="mt-24 max-w-[1200px] mx-auto bg-white rounded-2xl shadow-lg">
            <div className="p-24 text-center">
              <h3 className="text-4xl font-semibold text-gray-900 mb-10">
                No Current Openings
              </h3>
              <p className="text-2xl text-gray-600 mb-12">
                While we don't have any open positions right now, we're always
                looking for talented individuals to join our team. Please check
                back later for new opportunities.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-10 text-2xl py-10 px-12 border-2 border-[#25ccb6] text-[#25ccb6] rounded-xl 
                hover:bg-[#25ccb6] hover:text-white transition-colors duration-200"
              >
                Check Again
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMobile && <Mobilefooter></Mobilefooter>}
      {!isMobile && <Footer></Footer>}
    </>
  );
};

export default CareersPage;
