import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import resume from '../../assets/cv.pdf';
import roadmap from '../../assets/FULL STACK WEB DEVELOPER ROADMAP.pdf';
// images
import logo from '../../assets/img/logo.png';
import OpenPdfInNewTab from '../functions/DownloadDoc';

const Navbar = () => {
  // states
  const [open, setOpen] = useState(false);
  const [topVisible, setTopVisible] = useState(false);

  // functions
  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleAll = () => {
    setOpen(false);
    top();
  };

  const top = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth',
    });
  };

  //useEffect is used to attach the event listener when the component is mounted and detach it otherwise
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > 100) {
        setTopVisible(true);
      } else {
        setTopVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // return statement is used to remove the event listener before the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* NavBar */}
      <nav className={open ? 'clicked' : ''}>
        <div className="container">
          <a
            href="#home"
            aria-label="link to home section and also logo image"
            className="logo"
            onClick={toggleAll}
          >
            <img src={logo} alt="logo" width="40px" />
            <h2>JIM</h2>
          </a>

          {/* desktop nav */}
          <ul className="desktop-nav">
            {/* Home */}
            <div>
              <li className="first-link">
                <a href="#home" aria-label="link to home">
                  <p>Home</p>
                </a>
              </li>
              {/* About */}
              <li className="first-link">
                <a href="#about" aria-label="link to about us">
                  <p>About Me</p>
                </a>
              </li>
              {/* skills */}
              <li className="first-link">
                <a href="#skills" aria-label="link to skills">
                  <p>Skills</p>
                </a>
              </li>
              {/* Services */}
              <li className="first-link">
                <a href="#services" aria-label="link to services">
                  <p>Services</p>
                </a>
              </li>
              {/* Concours */}
              <li className="first-link">
                <a href="#projects" aria-label="link to projects">
                  <p>Projects</p>
                </a>
              </li>
              {/* Concours */}
              <li className="first-link">
                <a href="#testimonials" aria-label="link to testimonials">
                  <p>Testimonials</p>
                </a>
              </li>
              {/* Concours */}
              <li className="first-link">
                <a href="#contact" aria-label="link to contact form">
                  <p>Contact</p>
                </a>
              </li>
            </div>
            <div>
              <li>
                <OpenPdfInNewTab
                  pdfFile={resume}
                  name="Resume"
                  className={``}
                />
              </li>
              <li>
                <OpenPdfInNewTab
                  pdfFile={roadmap}
                  name="Roadmap"
                  className={``}
                />
              </li>
            </div>
          </ul>
          <button
            type="button"
            aria-label="menu button"
            className={`menu-button ${open ? 'clicked' : ''}`}
            onClick={toggleOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <button
        type="button"
        aria-label="back to top button"
        onClick={top}
        className={`scrollTop ${topVisible ? 'active' : ''}`}
      >
        <i className="bx bx-up-arrow-alt"></i>
      </button>

      {/* <!-- mobile nav --> */}
      <div className={`mobile-nav ${open ? 'active' : ''}`}>
        <ul className="links-container">
          <ul className="links">
            <li>
              <a href="#home" aria-label="link to home" onClick={toggleAll}>
                <i className="bx bxs-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" aria-label="link to about" onClick={toggleAll}>
                <i className="bx bxs-user"></i> <span>About Me</span>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                aria-label="link to services"
                onClick={toggleAll}
              >
                <i
                  className="bx bx-code-alt"
                  style={{
                    fontWeight: '800',
                  }}
                ></i>
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a
                href="#services"
                aria-label="link to services"
                onClick={toggleAll}
              >
                <i className="bx bxs-cog"></i>
                <span>Services</span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                aria-label="link to projects"
                onClick={toggleAll}
              >
                <i className="bx bxs-book"></i>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                aria-label="link to testimonials"
                onClick={toggleAll}
              >
                <i className="bx bxs-star"></i>
                <span>Testimonials</span>
              </a>
            </li>
          </ul>

          <li>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/takem-jim-7b7319227/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-linkedin-square"></i>
              </a>
              <a
                href="https://github.com/JIM440"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://twitter.com/TakemJim"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-twitter"></i>
              </a>{' '}
              <a
                href="https://studio.youtube.com/channel/UCUwvq0ka_bfT8kMxQO-XhdA/videos"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </li>
          <li>
            <a
              href="#contact"
              className="btn btn-white"
              onClick={toggleAll}
              aria-label="link to contact form"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
