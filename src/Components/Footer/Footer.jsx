import React from "react";
import "./Footer.css";
import { FiMapPin } from "react-icons/fi";
import {
  BsTelephone,
  BsClock,
  BsFacebook,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-scroll";
function Footer() {
  return (
    <div className="footer " id="contact">
      <div className="container m-auto overflow-hidden">
        <div className="row gy-3 ">
          <div className="col-lg-3 col-md-6 d-flex left">
            <FiMapPin className="icon" />

            <div>
              <h4>Address</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022 - US
                <br />
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <BsTelephone className="icon" />
            <div>
              <h4>Reservations</h4>
              <p>
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <BsClock className="icon" />
            <div>
              <h4>Opening Hours</h4>
              <p>
                <strong>Mon-Sat: 11AM</strong> - 23PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Follow Us</h4>
            <div className="d-flex">
              <Link to="#" className="social-links">
                <AiOutlineTwitter />
              </Link>
              <Link to="#" className="social-links">
                <BsFacebook />
              </Link>
              <Link to="#" className="social-links">
                <BsInstagram />
              </Link>
              <Link to="#" className="social-links">
                <BsLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
