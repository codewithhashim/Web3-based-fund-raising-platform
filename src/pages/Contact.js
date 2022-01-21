import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";

import { FaLocationArrow } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import "../components/assets/css/footer.css";
import "../components/assets/css/contact/contact.css";
import { Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact-container">
      <section className="contact-fixed">
        <h1 className="contact-heading">Contact Information</h1>
        <p className="contact-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          sit?
        </p>
        <ul className="contact-list">
          <li className="contact-list-phone">
            <AiFillPhone className="icon" />
            <a href="tel:+923495150129">+92-349-515-0129</a>
          </li>
          <li className="contact-list-email">
            <AiTwotoneMail className="icon" />
            <a href="mailto:muhammadhashim4e@gmail.com">
              muhammadhashim4e@gmail.com
            </a>
          </li>
          <li className="contact-list-address">
            <FaLocationArrow className="icon" />
            F8 Markaz, ISB
          </li>
        </ul>
        <div className="contact-social">
          <div className="footericons">
            <AiFillFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>
      </section>
      <section className="contact-form">
        <h1>
          Get your Questions answered,
          <br />
          or just say Hi 👋
        </h1>
        <Form
          className="bt-form"
          action="https://formsubmit.co/8bd53102b3d41cebdba702f07995ca8c"
          method="POST"
        >
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              className="contact-form-input"
              name="name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Enter your your email address"
              className="contact-form-input"
              name="email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="
              Your message in details
            "
              className="contact-form-input"
              name="message"
              rows={3}
            />
          </Form.Group>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/thankyou"
          ></input>
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_autoresponse"
            value="This is an auto response from the team Builders, we are working hard to get back to you as soon as possible."
          ></input>
          <input type="hidden" name="_template" value="table"></input>
          <input
            type="hidden"
            name="_cc"
            value="abdulbasitpc33@gmail.com "
          ></input>
          <input
            type="hidden"
            name="_cc"
            value="prohashim4e@gmail.com "
          ></input>

          <Button variant="primary" type="submit">
            Say Hello
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default Contact;
