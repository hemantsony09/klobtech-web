import { motion } from "framer-motion";
import "./Services.css";
import { Link } from "react-router-dom";
import cmsImg from "./CMSService/assets/cms.png";
import webdevImg from "./Web-Development/Assets/webdev.png";
import mobileImg from "./Mobile-Development/assets/mobile.png";
import btbsImg from "./services/assets/b2b.png";
import recruitImg from "./services/assets/recruitment.png";
import ecommerceImg from "./services/assets/ecommerce.png";
import educationImg from "./services/assets/education.png";

function Services() {
  return (
    <>
      <div id="service" className="serviceContainer">
        <div className="titleContainer">
          <span className="mainTitle">
            Our <span style={{ color: "var(--accent-color)" }}>Services</span>{" "}
            Include
          </span>
          <span className="secondaryTitle">But are not limited to</span>
        </div>
        <div className="serviceArea">
          <Link to="/mad">
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="service service1"
            >
              <div className="iconArea">
                <img src="" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle">
                  Mobile App Development
                </p>
                <div className="iconArea">
                  <img src={mobileImg} alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/mad"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </Link>
          <Link to="/fullStackDevelopment">
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="service service2"
            >
              <div className="iconArea">
                <img src="" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle">
                  Full Stack Development
                </p>
                <div className="iconArea">
                  <img src={webdevImg} alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/fullStackDevelopment"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </Link>
          <Link to="/digitalmarketing">
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="service service3"
            >
              <div className="iconArea">
                <img src="" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle unevenCardTitles">
                  Digital Marketing
                </p>
                <div className="iconArea">
                  <img src="digital.png" alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/digitalmarketing"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </Link>
          <Link to="/cms">
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="service service4"
            >
              <div className="iconArea">
                <img src="" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle">CMS Services</p>
                <div className="iconArea">
                  <img src={cmsImg} alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/cms"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </Link>
          <Link to="/btbs">
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="service service5"
            >
              <div className="iconArea">
                <img src="" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle">B2B Services</p>
                <div className="iconArea">
                  <img src={btbsImg} alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/btbs"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </Link>
          <Link to="/recruitment">
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="service service6"
            >
              <div className="iconArea">
                <img src="" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle">
                  Recruitment Services
                </p>
                <div className="iconArea">
                  <img src={recruitImg} alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/recruitment"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </Link>
          <Link to="/ecommerce">
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="service service7"
            >
              <div className="iconArea">
                <img src="" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle">Ecommerce</p>
                <div className="iconArea">
                  <img src={ecommerceImg} alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/ecommerce"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </Link>
          <Link to="/education">
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="service service8"
            >
              <div className="iconArea">
                <img src="" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle">Education</p>
                <div className="iconArea">
                  <img src={educationImg} alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/education"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Services;