import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import x from "./assets/x.png";
import xaccent from "./assets/xaccent.png";
import insta from "./assets/instagram.png";
import instaccent from "./assets/instagramaccent.png";
import linked from "./assets/linkedin.png";
import linkedaccent from "./assets/linkedaccent.png";
import { Link, Outlet } from "react-router-dom";
Outlet;

import "./Footer.css";
function Footer() {
  const [showFooter, setShowFooter] = useState(false);
  const [footerAnimated, setFooterAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;

      // Check if the user has scrolled near the bottom of the page
      if (scrolled >= scrollableHeight - 10) {
        setShowFooter(true);
        setFooterAnimated(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerAnimated]);
  return (
    <>
      <motion.div
        // initial={{ y: "100%" }} // Start completely off-screen
        // animate={{
        //   y: showFooter ? "0%" : "100%",
        //   // marginTop: showFooter ? "10rem" : "5rem",
        // }} // Animate into view when true
        // transition={{ type: "spring", stiffness: 420, damping: 50 }}
        // style={{
        //   position: "fixed",
        //   bottom: "0",
        //   // marginTop: "auto",ffa
        //   // left: "2.5%",
        //   margin: "0 auto",
        //   // width: "95%",
        //   backgroundColor: "#333",
        //   color: "#fff",
        //   // textAlign: "center",
        //   padding: "20px 0",
        //   boxShadow: "0 -5px 10px rgba(0, 0, 0, 0.2)",
        // }}
        id="footer"
        className="footerContainer"
      >
        <div className="footerTitle">
          <span>Contact us</span>
        </div>
        {/* <div className="borderline"></div> */}
        <div className="footerArea">
          <div className="navigation">
            <ul>
              <Link to="/about">About us</Link>
              <p></p>
              <Link to="/contact">Contact us</Link>
              <p></p>
              <Link to="/about">Privacy Policy</Link>
              <p></p>
              <Link to="/tac">Terms and Conditions</Link>
              <p></p>
              <Link to="/career">Career</Link>
              <p></p>
              <Link to="/faq">FAQ</Link>
            </ul>
          </div>
          <div className="contact">
            <div className="numbers">
              <h2 className="subHeader">Get in touch</h2>
              <a href="tel:+919024790200">+91-9024790200</a>
              <a href="mailto:info@klobtech.com?subject=Inquiry&body=Hello, I would like to know more about...">
                info@klobtech.com
              </a>
            </div>
            <div className="links">
              <a href="https://x.com/KLobTech" target="_blank">
                <img
                  onMouseLeave={(e) => (e.currentTarget.src = x)}
                  onMouseEnter={(e) => (e.currentTarget.src = "xaccent.png")}
                  src={x}
                  alt=""
                  style={{
                    cursor: "pointer",
                    transition: "opacity ease 1s", // Smooth transition effect
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/klobtech/?igsh=cnlqcHp6eWV6cGs2#"
                target="_blank"
              >
                <img
                  onMouseLeave={(e) => (e.currentTarget.src = insta)}
                  onMouseEnter={(e) => (e.currentTarget.src = instaccent)}
                  src={insta}
                  alt=""
                  style={{
                    cursor: "pointer",
                    transition: "opacity ease 1s", // Smooth transition effect
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/klobtech/posts/?feedView=all"
                target="_blank"
              >
                <img
                  onMouseLeave={(e) => (e.currentTarget.src = linked)}
                  onMouseEnter={(e) => (e.currentTarget.src = linkedaccent)}
                  src={linked}
                  alt=""
                  style={{
                    cursor: "pointer",
                    transition: "opacity ease 1s", // Smooth transition effect
                  }}
                />
              </a>
            </div>
          </div>
          <div className="address">
            <h2 className="subHeader">HQ Address</h2>
            <a href="https://maps.app.goo.gl/hm96Fzcc7Cm3ByBZ8" target="_blank">
              H-248c,Riico Ind. Area, <br />
              Road No. 2. Mansarovar, <br />
              Jaipur, Rajasthan, India
            </a>

            <h2 style={{ marginTop: "3rem" }} className="subHeader">
              Branch Address
            </h2>
            <a href="https://maps.app.goo.gl/sxv4K81vq5x3jCBr9" target="_blank">
              5th Floor, Jaipur Electronic Market, <br />
              Near Riddhi Siddhi Circle, <br />
              Gopalpura Bypass Road, Jaipur, <br />
              Rajasthan, India 302018
            </a>
          </div>
        </div>
        <div className="footerBottom">
          <p>© KLobTech. All Rights Reserved</p>
        </div>
      </motion.div>
    </>
  );
}

export default Footer;
