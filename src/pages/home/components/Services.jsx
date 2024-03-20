import design from '../../../assets/icons/design.png';
import maintenance from '../../../assets/icons/maintenance.png';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="header">My Services 👨‍🔧</h2>
        <p className="header-description">What I Offer</p>

        <div className="services-container">
          <div className="service-box">
            <div className="img">
              <i class="bx bx-code-alt"></i>
            </div>
            <h3 className="service-heading">Web Development</h3>
            <p className="service-description">
              I deliver end-to-end solutions for front-end and back-end
              development, ensuring high-quality and user-friendly experience.
            </p>
          </div>
          <div className="service-box">
            <div className="img">
              <i class="bx bx-scatter-chart"></i>
            </div>
            <h3 className="service-heading">Data Analysis</h3>
            <p className="service-description">
              I transform meaningless data into beautiful, and informative
              dashboards, by analyzing data, identify trends, and
              recommendations for growth and success.
            </p>
          </div>
          <div className="service-box">
            <div className="img">
              <img src={maintenance} alt="mentorship icon" />
            </div>
            <h3 className="service-heading">Mobile App Development</h3>
            <p className="service-description">
              I develop user-friendly mobile apps. Ensuring smooth performance
              with an appealing interface to help you reach your target
              audience.
            </p>
          </div>
          <div className="service-box">
            <div className="img">
              <img src={design} alt="ui/ux icon" />
            </div>
            <h3 className="service-heading">UI | UX Design</h3>
            <p className="service-description">
              I create attractive and user-friendly digital experiences that
              help your business succeed. I focus on visually appealing designs,
              and engaging user interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
