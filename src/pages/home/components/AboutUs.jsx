import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="about" id="about">
      <div className="even-columns container">
        <div className="text">
          <h2 className="header">About Me 🙂</h2>
          <br />
          <p>
            I'm Takem Jim, a <span className="red">full stack developer</span>,
            <span className="blue"> UI/UX designer</span>, and{' '}
            <span className="red">data enthusiast</span>, currently pursuing my
            bachelor's degree in Software Engineering as I strive to expand my
            knowledge in the dynamic field of technology. <br />
            For those who are eager to embark on their own tech journey, I've
            prepared a comprehensive developer{' '}
            <a href="">
              <span className="blue underline">roadmap</span>
            </a>{' '}
            to guide you through. <br />
            So, whether you're an aspiring developer or someone looking for
            innovative solutions, let's embark on this exciting tech journey
            together.
          </p>
          <br />
          <br />
          <div className="btn-container">
            <Link
              to="about"
              className="btn"
              aria-label="link to asend about us page"
            >
              Get Started
            </Link>
            <a
              href="#contact"
              className="btn btn-white"
              aria-label="link to contact form"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="image">
          <img
            src="https://as2.ftcdn.net/v2/jpg/03/02/94/53/1000_F_302945354_dqIiUiITKpard7fBVKDLtffIqnkDbyo4.jpg"
            alt="half picuture of boy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
