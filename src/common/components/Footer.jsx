import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../assets/cv.pdf';
import roadmap from '../../assets/FULL STACK WEB DEVELOPER ROADMAP.pdf';

// images
import logo from '../../assets/img/logo.png';
import OpenPdfInNewTab from '../functions/DownloadDoc';
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid-container">
          <div className="footer-grid-box">
            <a href="#home" aria-label="link to home section" className="logo">
              <img src={logo} alt="logo" width="40px" />
              <h2>JIM</h2>
            </a>
            <form action="" className="flex-col">
              <h3>Subscribe To My Newsletter</h3>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id="newsletter-email"
                  required
                />
                <button
                  type="submit"
                  aria-label="submit newsletter"
                  className="btn"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <span>
              <b>Follow Us:</b>
            </span>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/takem-jim-7b7319227/"
                aria-label="link to linkedin profile"
              >
                <i class="bx bxl-linkedin-square"></i>
              </a>
              <a
                href="https://github.com/jim440"
                aria-label="link to github profile"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://twitter.com/TakemJim"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-twitter"></i>
              </a>
              <a
                href="https://studio.youtube.com/channel/UCUwvq0ka_bfT8kMxQO-XhdA/videos"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-grid-box links">
            <p>Quick Links</p>
            <ul>
              <li>
                <a href="#home" aria-label="link home section">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" aria-label="link about section">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" aria-label="link skills section">
                  Skills
                </a>
              </li>
              <li>
                <a href="#services" aria-label="link services section">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" aria-label="link projects section">
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" aria-label="link testimonials section">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" aria-label="link contact section">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-grid-box">
            <p>Helpers</p>
            <ul>
              <li>
                <OpenPdfInNewTab
                  pdfFile={roadmap}
                  name="Roadmap"
                  className={``}
                />
                {/* <button
                  aria-label="download roadmap"
                  onClick={handleDownload(resume)}
                >
                  Roadmap
                </button> */}
              </li>
              <li>
                <OpenPdfInNewTab
                  pdfFile={resume}
                  name="Resume"
                  className={``}
                />
              </li>
            </ul>
          </div>
          <div className="footer-grid-box contact">
            <p>Contact</p>
            <ul>
              <li>
                <i className="bx bxs-phone"></i>
                <p>+(237) 654812052</p>
              </li>
              <li>
                <i className="bx bx-current-location"></i>
                <p>Buea, Cameroon</p>
              </li>

              <li>
                <i className="bx bxs-envelope"></i>
                <p>takemjim43@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copy-right">
          <p>
            Copyright <i className="bi bi-c-circle"></i>
            &nbsp;Takem Jim 2024. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
