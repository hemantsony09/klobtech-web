import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const MobileNavItem = ({ label, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-10 py-8 hover:bg-white/50 transition-all duration-300 text-4xl font-medium"
      >
        <span className="flex items-center justify-between">
          {label}
          {items.length > 0 && (
            <svg
              className={`w-10 h-10 transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>

      {isOpen && items.length > 0 && (
        <div className="pl-10 bg-white/30">
          {items.map((item) =>
            typeof item === "string" ? (
              <button
                key={item}
                className="w-full text-left px-10 py-8 hover:bg-white/50 transition-all duration-300 text-3xl"
              >
                {item}
              </button>
            ) : (
              <MobileSubNavItem key={item.label} {...item} />
            )
          )}
        </div>
      )}
    </div>
  );
};

const MobileSubNavItem = ({ label, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-10 py-8 hover:bg-white/50 transition-all duration-300 text-3xl"
      >
        <span className="flex items-center justify-between">
          {label}
          {items.length > 0 && (
            <svg
              className={`w-10 h-10 transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>

      {isOpen && (
        <div className="pl-10 bg-white/30">
          {items.map((item) => (
            <button
              key={item}
              className="w-full text-left px-10 py-8 hover:bg-white/50 transition-all duration-300 text-3xl"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const DesktopNavItem = ({ children, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="px-8 py-4 hover:text-blue-500 transition-colors duration-300 font-medium text-xl">
        {children}
      </button>

      {items.length > 0 && isOpen && (
        <div className="absolute left-0 top-full bg-white/70 backdrop-blur-md shadow-lg rounded-xl py-2 border border-white/20">
          {items.map((item, index) => (
            <DesktopSubNavItem key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

const DesktopSubNavItem = ({ label, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="w-full text-left px-8 py-4 hover:bg-white/50 transition-all duration-300 text-xl">
        <span className="flex items-center justify-between">
          {label}
          {items.length > 0 && (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </span>
      </button>

      {items.length > 0 && isOpen && (
        <div className="absolute left-full top-0 w-72 bg-white/70 backdrop-blur-md shadow-lg rounded-xl py-2 border border-white/20">
          {items.map((item, index) => (
            <button
              key={index}
              className="w-full text-left px-8 py-4 hover:bg-white/50 transition-all duration-300 text-xl"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Navvv = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      label: "Service 1",
      items: ["Service 1.1", "Service 1.2", "Service 1.3"],
    },
    {
      label: "Service 2",
      items: ["Service 2.1", "Service 2.2", "Service 2.3"],
    },
    {
      label: "Service 3",
      items: ["Service 3.1", "Service 3.2", "Service 3.3"],
    },
  ];

  const navItems = [
    { label: "Home" },
    { label: "About" },
    { label: "Services", items: services },
    { label: "Contact" },
    { label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex items-center justify-between h-32">
          {/* Logo Space */}
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-white/20 backdrop-blur-md flex items-center justify-center text-gray-600 text-3xl">
            Logo
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <DesktopNavItem key={item.label} items={item.items || []}>
                {item.label}
              </DesktopNavItem>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={48} /> : <Menu size={48} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white/90 backdrop-blur-lg transition-transform duration-300 transform md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "128px" }}
      >
        <div className="h-full overflow-auto py-10">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.label}
              label={item.label}
              items={item.items || []}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navvv;
