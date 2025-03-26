import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const handleExtend = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="navbar">
      <img className="logo" src="logo.png" alt="" />
      <motion.nav
        className="nav-bar"
        animate={{
          height: isVisible ? "75rem" : "5rem",
          // width: isVisible ? "50rem" : "5rem",
        }}
        transition={{ duration: 0.5 }}
        // onClick={handleExtend}
      >
        <motion.ul className="nav-bar-list">
          <li className="element1">
            <Link to="/">Home</Link>
            <div className="underline underline1"></div>
          </li>
          <li className="element1">
            <Link to="/#service">Services</Link>
            <div className="underline underline1"></div>
          </li>

          {/* <motion.li
            className="element2"
            onClick={handleExtend}
            style={{ cursor: "pointer" }}
          >
            Menu<div className="underline underline2"></div>
          </motion.li> */}
          <li className="element3">
            <a href="#information">About</a>
            <div className="underline underline2"></div>
          </li>
          <li className="element3">
            <a href="#footer">Contact</a>
            <div className="underline underline2"></div>
          </li>
        </motion.ul>
        {isVisible ? (
          <>
            <div className="extended-container">
              <motion.p
                animate={{ opacity: 1, x: 40 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="extended-description"
              >
                KLobTech provides high-quality B2B market research, verified
                contact data, and actionable insights, while also offering
                full-stack and mobile Flutter development through our dedicated
                IT team.
              </motion.p>
              <motion.p
                animate={{ opacity: 1, x: 40 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="extended-question1"
              >
                <a href="emp">MEET THE TEAM</a>
              </motion.p>
              <motion.p
                animate={{ opacity: 1, x: 40 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="extended-answer1"
              >
                The minds behind KLobTech: Innovators, analysts, and creators
                driving your success
              </motion.p>
            </div>
            {/* <div className="extended-footer">
              <motion.h1
                className="extended-footer-logo"
                animate={{ opacity: 1, x: 40 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                KLobTech
              </motion.h1>
            </div> */}
          </>
        ) : null}
      </motion.nav>
    </div>
  );
}

export default Navigation;
