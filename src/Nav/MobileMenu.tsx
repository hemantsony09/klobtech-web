import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "./serviceData";

interface MobileMenuProps {
  isOpen: boolean;
  activeMenu: string | null;
  activeSubmenu: string | null;
  onMenuClick: (menu: string) => void;
  onSubmenuClick: (submenu: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeMenu,
  activeSubmenu,
  onMenuClick,
  onSubmenuClick,
}) => {
  return (
    <div
      className={`lg:hidden absolute top-24 left-0 w-full h-[90rem] bg-[#f3f3f3] shadow-lg transform transition-all duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="py-2 ">
        <Link
          to="/"
          className="flex justify-start px-16 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150 text-[2rem]"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="flex justify-start px-16 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150 text-[2rem]"
        >
          About
        </Link>
        <Link
          to="/faq"
          className="flex justify-start px-16 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150 text-[2rem]"
        >
          FAQ
        </Link>

        {/* Services menu button */}
        <div>
          <button
            onClick={() => onMenuClick("services")}
            className="flex w-full text-start px-16 text-gray-700 hover:bg-[#f3f3f3] transition-colors duration-150 text-[2rem] items-center"
          >
            Services
            <span
              style={{
                display: "inline-block",
                transform:
                  activeMenu === "services" ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
                marginLeft: "1.5rem",
              }}
            >
              {">"}
            </span>
          </button>
          <div
            style={{
              boxShadow:
                "0 4px 6px rgba(0, 0, 0, 0.1), 0 -4px 6px rgba(0, 0, 0, 0.1)",
              marginLeft: "4rem",
              marginRight: "4rem",
            }}
            className={`rounded-3xl text-[1.5rem] px-4 bg-[#f3f3f3] transform transition-all duration-300 ease-in-out ${
              activeMenu === "services"
                ? "max-h-auto opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {servicesData.map((service) => (
              <div key={service.name}>
                {service.subItems && service.subItems.length > 0 ? (
                  <>
                    <button
                      // onClick={() => onSubmenuClick(service.name)}
                      className="w-auto text-left px-6 pb-4 text-grey-700 hover:bg-[#f3f3f3] transition-colors duration-150 flex items-center"
                    >
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-0 py-2 text-gray-700 hover:bg-gray-200 transition-colors duration-150"
                      >
                        {service.name}
                      </Link>
                    </button>
                    <div
                      style={{
                        boxShadow:
                          "0 4px 6px rgba(0, 0, 0, 0.1), 0 -4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                      className={`bg-[#f3f3f3] rounded-3xl mb-4 transform transition-all duration-300 ease-in-out text-[1.3rem] ${
                        activeSubmenu === service.name
                          ? "max-h-auto opacity-100"
                          : "max-h-auto opacity-100 overflow-hidden"
                      }`}
                    >
                      {service.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-8 py-2 text-gray-700 hover:bg-gray-200 transition-colors duration-150"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={service.path}
                    className="block px-6 pb-4 text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                  >
                    {service.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <Link
          to="/contact"
          className="flex justify-start px-16 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150 text-[2rem]"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
