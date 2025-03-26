import "./Mobilefooter.css";
import x from "./Components/assets/x.png";
import instagram from "./Components/assets/instagram.png";
import linkedin from "./Components/assets/linkedin.png";
import { Link } from "react-router-dom";
function Mobilefooter() {
  return (
    <>
      <div className="mobileFooterContainer">
        <div className="mobileFooterTitleArea">
          <p>Contact US</p>
        </div>
        <div className="mobileFooterContacteArea">
          <div className="contactDetails">
            <span className="contactAreaSubHeader">Get in Touch</span>
            <a href="tel:+919024790200">+91-9024790200</a>
            <a href="mailto:info@klobtech.com?subject=Inquiry&body=Hello, I would like to get in touch with your company.">
              info@klobtech.com
            </a>
          </div>
          <div className="socialMediaImg">
            <a href="https://x.com/KLobTech" target="_blank">
              <img src={x} alt="" />
            </a>

            <a
              href="https://www.instagram.com/klobtech/?igsh=cnlqcHp6eWV6cGs2#"
              target="_blank"
            >
              <img src={instagram} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/company/klobtech/posts/?feedView=all"
              target="_blank"
            >
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
        <div className="mobileFooterBottomArea">
          <div className="addressDetails contactDetails">
            <span className="contactAreaSubHeader">Visit Us At</span>
            <a href="https://maps.app.goo.gl/sxv4K81vq5x3jCBr9" target="_blank">
              5th Floor, Jaipur Electronic Market, <br />
              Near Riddhi Siddhi Circle, <br />
              Gopalpura Bypass Road, Jaipur, <br />
              Rajasthan, India 302018
            </a>

            <span className="contactAreaSubHeader">HQ address</span>
            <a href="https://maps.app.goo.gl/hm96Fzcc7Cm3ByBZ8" target="_blank">
              H-248c,Riico Ind. Area, <br />
              Road No. 2. Mansarovar, <br />
              Jaipur, Rajasthan, India
            </a>
          </div>
        </div>
        <div className="mobileFooterBottom">
          <p>© 2018-2024 KLobTech. All Rights Reserved</p>
          <Link to="/tac">Terms and Conditions</Link>
        </div>
      </div>
    </>
  );
}

export default Mobilefooter;
