import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import "./assets/css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-section">
          <div className="logo footer-logo  ">
            <a href="/">WebParrots</a>
          </div>
          <div className="footer-text">
            Lorem ipsum dolor sit. <br />
            Lorem, ipsum dolor.
          </div>
          <div className="footericons">
            <AiFillFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>
        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>About</li>
            <li>Partners</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Help? </h4>
          <ul>
            <li>FAQs</li>
            <li>TOS</li>
            <li>Polices</li>
          </ul>
        </div>
        <div className="footer-address">
          <h4>Adress </h4>
          <ul>
            <li>7th Ave, st34, Dubai</li>
            <li>webparrots.com </li>
            <li>Mobile App</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copy-r">
          <p>&copy; 2022 Webparrots. All rights reserved.</p>
        </div>
      </div>
    

    </footer>
  );
}

export default Footer;
