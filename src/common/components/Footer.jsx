import React from 'react';
import { Link } from 'react-router-dom';
// images
import logo from '../../assets/img/logo.png';
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid-container">
          <div className="footer-grid-box">
            <Link to="/" aria-label="link to home page" className="logo">
              <img src={logo} alt="logo" />
              <h2>JIM</h2>
            </Link>
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
              <a href="">
                <i class="bx bxl-linkedin-square"></i>
              </a>
              <a href="">
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </div>

          <div className="footer-grid-box links">
            <p>Quick Links</p>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Skills</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-grid-box">
            <p>Helpers</p>
            <ul>
              <li>
                <Link
                  to="concours/engineering"
                  aria-label="link to asend engineering concour page"
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  to="concours/medicine"
                  aria-label="link to asend medicine concour page"
                >
                  Resume | CV
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-grid-box contact">
            <p>Contact</p>
            <ul>
              <li>
                <i className="bx bxs-phone"></i>
                <p>(+237) 654812052</p>
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
