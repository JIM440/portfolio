import { Link } from 'react-router-dom';
import OpenPdfInNewTab from '../../../common/functions/DownloadDoc';
import roadmap from '../../../assets/FULL STACK WEB DEVELOPER ROADMAP.pdf';
import resume from '../../../assets/cv.pdf';

const AboutUs = () => {
  return (
    <section className="about" id="about">
      <div className="even-columns container">
        <div className="text">
          <h2 className="header">About Me 🙂</h2>
          <p>
            I'm Takem Jim, a <span className="red">full stack developer</span>,
            <span className="blue"> UI/UX designer</span>, and
            <span className="red"> data enthusiast</span>, currently pursuing my
            bachelor's degree in Software Engineering as I strive to expand my
            knowledge in the dynamic field of technology. <br />
            For those who are eager to embark on their own tech journey, I've
            prepared a comprehensive developer &nbsp;
            {/* <button aria-label="downlo to developer roadmap page" to="/roadmap">
              <span className="blue underline">roadmap</span>
            </button> */}
            <OpenPdfInNewTab
              pdfFile={roadmap}
              name="roadmap"
              className="blue underline"
            />
            &nbsp; to guide you through. <br />
            So, whether you're an aspiring developer or someone looking for
            innovative solutions, let's embark on this exciting tech journey
            together.
          </p>
          <div className="btn-container">
            <a
              href="#contact"
              className="btn"
              aria-label="link to contact form"
            >
              Get Started
            </a>
            <OpenPdfInNewTab
              pdfFile={resume}
              name="Download Resume"
              className="btn btn-white"
            />
          </div>
        </div>
        <div className="image">
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
