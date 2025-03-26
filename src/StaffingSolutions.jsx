import { useState } from "react";
import "./StaffingSolutions.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyLogo</div>
      <ul className="navbar-links">
        <li>About</li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          Services
          <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </li>
        <li>Contact</li>
      </ul>
      <div className="hamburger-menu" onClick={toggleDropdown}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
