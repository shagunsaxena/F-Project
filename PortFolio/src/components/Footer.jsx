import React from 'react'

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="footer">

      <div className="footer-container">

        <div className="footer-info">
          <h2>Let's Connect</h2>

          <p>
            Interested in Frontend Development,
            Business Analysis, or Product Management?
            Let's build something impactful together.
          </p>

          <div className="contact-details">

            <div>
              <FaEnvelope />
              <span>shagunsaxena018@hotmail.com</span>
            </div>

            <div>
              <FaPhone />
              <span>+91 9871460529</span>
            </div>

          </div>
        </div>

        <div className="footer-social">

          <h3>Follow Me</h3>

          <div className="social-icons">

            <a
              href="https://www.linkedin.com/in/shagun-saxena/"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/shagunsaxena"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://github.com/shagunsaxena"
              target="_blank"
            >
              <FaGithub />
            </a>



          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Shagun Saxena.
        All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;