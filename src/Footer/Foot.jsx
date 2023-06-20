import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Foot = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href="/resources">
              <p>Resource Center</p>
            </a>
            <a href="/testimonials">
              <p>Testimonials</p>
            </a>
            <a href="/stv">
              <p>STV</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Parteners</h4>
            <a href="/partners">
              <p>Newton School</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              {/* This is Dynamic importing for which babel is required but separate importing of icons is not required. */}
              <p>
                <FontAwesomeIcon icon={faFacebook} />
              </p>
              {/* This is individal importing for which babel is not required but we have to import each individal icon separately.*/}
              <p>
                <FontAwesomeIcon icon={faTwitter} />
              </p>
              <p>
                <FontAwesomeIcon icon={faLinkedin} />
              </p>
              <p>
                <FontAwesomeIcon icon={faInstagram} />
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} Quora. All rights reserved.</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
