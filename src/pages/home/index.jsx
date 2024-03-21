import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import UseScrollTop from '../../common/components/UseScrollTop';
import Projects from './components/Projects';

const Home = () => {
  const scrollToTop = UseScrollTop();
  return (
    <>
      <section
        className="hero hero-home"
        id="home"
        style={{ marginTop: '0px' }}
      >
        <div className="container">
          <div className="hero-columns">
            <div className="hero-img">
              <img
                src="https://asend-website.vercel.app/static/media/santina.e5258ee774f594e31b9a.jpg"
                alt=""
              />
            </div>
            <div className="hero-text">
              <h1 className="header" style={{ textAlign: 'left' }}>
                Welcome!!! 👋
              </h1>

              <p>
                Welcome to my world of <span className="blue">technology</span>{' '}
                and <span className="red">data</span>! I'm thrilled to have you
                here as we dive into the captivating world where technology
                meets data.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AboutUs />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
    </>
  );
};

export default Home;
