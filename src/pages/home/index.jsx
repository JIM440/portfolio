import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import UseScrollTop from '../../common/components/UseScrollTop';
import Projects from './components/Projects';
import jim from '../../assets/img/jim1.jpg';

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
              <img src={jim} alt="" />
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
