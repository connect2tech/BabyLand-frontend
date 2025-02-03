import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import bg from "../../assets/8bde43e7711690d8f6c15d14a44e6d4e.png";
import footerlogo from "../../assets/image 2.png";
import insta from "../../assets/Instagram.png";
import twit from "../../assets/Twitter Circled.png";
import face from "../../assets/Facebook.png";
import pin from "../../assets/Pinterest.png";

const Footer = () => {
  return (
    <footer className="position-relative">
      <img className="foot-img position-relative" src={bg} alt="" />

      <div className="inn-footer text-start d-flex align-items-start position-absolute">
        <div className="foot-one d-flex flex-column">
          <div className="d-flex flex-column align-items-start gap-3">
            <Link>
              <img src={footerlogo} alt="" />
            </Link>
            <p className="m-0">
              Nunc consequat interdum varius sit amet mattis.{" "}
            </p>
          </div>

          <div className="d-flex align-items-start gap-3">
            <a href="#">
              <img src={insta} alt="" />
            </a>

            <a href="#">
              <img src={twit} alt="" />
            </a>

            <a href="#">
              <img src={face} alt="" />
            </a>

            <a href="#">
              <img src={pin} alt="" />
            </a>
          </div>
        </div>

        <div className="foot-two d-flex flex-column align-items-start">
          <h5 className="mb-0">My Account</h5>
          <div className="d-flex flex-column align-items-start gap-3">
            <p>Track my order</p>
            <p>Terms of use</p>
            <p>Wishlist</p>
            <p>Submit Your feedback</p>
          </div>
        </div>

        <div className=" foot-three d-flex flex-column align-items-start">
          <h5 className="mb-0">Customer sevice</h5>
          <div>
            <p>Monday to Friday</p>
            <p>Monday to Friday</p>
            <p>10am - 6pm NewYork time</p>
            <p>
              Call Us : <span>09035586766</span>
            </p>
            <p>
              Email us: <span>laurenjude9@gmial.com</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
