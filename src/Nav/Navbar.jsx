import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDropdownState } from "./useDropdownState";
import SubMenu from "./SubMenu";
import MobileMenu from "./MobileMenu";
import { servicesData } from "./serviceData";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import HiringButton from "../HiringButton"
const Navbar = () => {
  const {
    activeMenu,
    activeSubmenu,
    isMobileMenuOpen,
    handleMenuHover,
    handleMenuLeave,
    handleSubmenuHover,
    handleMobileMenuClick,
    handleMobileSubmenuClick,
    toggleMobileMenu,
  } = useDropdownState();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const location = useLocation();

  // Close the menu when the Home button is clicked while already on the homepage
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      toggleMobileMenu(); // Close the mobile menu if we're on the home page
    }
  };

  // Close dropdown when any nav item except 'services' is clicked
  const handleNavClick = () => {
    if (activeMenu !== "services") {
      toggleMobileMenu(); // Close the mobile menu
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content flex justify-between items-center h-[80px]">
          {/* Mobile Logo on the far left */}
          <Link to="/">
            {isMobile && (
              <div className="mobile-logo-container flex-shrink-0 absolute left-10 top-1/2 transform -translate-y-1/2">
                <img
                  src={logo}
                  alt="Logo"
                  className="mobile-logo w-16 h-auto" // Increased logo size
                />
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-navigation">
            <div className="desktop-nav-items">
              <Link
                to="/"
                className="nav-link"
                onClick={() => {
                  handleHomeClick();
                  handleNavClick();
                }}
              >
                Home
              </Link>
              <Link to="/about" className="nav-link" onClick={handleNavClick}>
                About
              </Link>
              <div className="services-dropdown" onMouseLeave={handleMenuLeave}>
                <button
                  onMouseEnter={() => handleMenuHover("services")}
                  className={`services-dropdown-trigger ${
                    activeMenu === "services" ? "active" : ""
                  }`}
                >
                  Services
                </button>
                {activeMenu === "services" && (
                  <div className="services-dropdown-menu">
                    {servicesData.map((service) => (
                      <div
                        key={service.name}
                        onMouseEnter={() => handleSubmenuHover(service.name)}
                        onMouseLeave={() => handleSubmenuHover("")}
                        className="services-dropdown-item"
                      >
                        <Link
                          to={service.path}
                          className="services-dropdown-link"
                          onClick={handleNavClick} // Keep the dropdown open for services
                        >
                          {service.name}
                        </Link>
                        {activeSubmenu === service.name && service.subItems && (
                          <SubMenu items={service.subItems} />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/faq" className="nav-link" onClick={handleNavClick}>
                FAQ
              </Link>
              <Link to="/contact" className="nav-link" onClick={handleNavClick}>
                Contact
              </Link> 
                  {/* <HiringButton/> */}
              <Link to="/hiring" className="nav-link" onClick={handleNavClick}>
                Hiring
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-toggle">
            <button onClick={toggleMobileMenu} className="mobile-menu-button">
              <span className="screen-reader-text">Open main menu</span>
              <div className="mobile-menu-icon">
                <span
                  className={`menu-icon-line ${
                    isMobileMenuOpen ? "rotate-down" : ""
                  }`}
                />
                <span
                  className={`menu-icon-line ${isMobileMenuOpen ? "hide" : ""}`}
                />
                <span
                  className={`menu-icon-line ${
                    isMobileMenuOpen ? "rotate-up" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeMenu={activeMenu}
        activeSubmenu={activeSubmenu}
        onMenuClick={handleMobileMenuClick}
        onSubmenuClick={handleMobileSubmenuClick}
      />
    </nav>
  );
};

export default Navbar;
