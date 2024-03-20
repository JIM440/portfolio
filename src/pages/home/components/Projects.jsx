import React from 'react';

const project = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="header">My projects 👨‍💻</h2>
        <p className="header-description">
          Check out some of my project and work
        </p>
        <div className="project-container">
          <div className="project">
            <img
              src="https://phintraco.com/wp-content/uploads/2021/09/Data-warehouse-and-database-the-difference.jpeg"
              alt=""
            />
            <div>
              <p className="header">E-Commerce Website</p>
              <p className="description">
                An e-commerce website, where users can view and purchase
                products from a range of products. With a cart to save various
                products. <p className="bold">HTML | CSS | Javascript</p>
              </p>
            </div>
            <div className="buttons">
              <a
                href="https://github.com/JIM440/e-commerce-website-devlab"
                target="_blank"
                className="btn"
              >
                <span>Github</span>
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://jim440.github.io/e-commerce-website-devlab/index.html"
                target="_blank"
                className="btn "
              >
                <span>Live Demo</span> <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="project">
            <img src="img/asend.jpg" alt="" />
            <div>
              <p className="header">ASEND Website</p>
              <p className="description">
                A multipag website for a prep group that prepares students for
                professional exams.{' '}
                <p className="bold">HTML | SASS | JavaScript</p>
              </p>
            </div>
            <div className="buttons">
              <a
                href="https://github.com/JIM440/ASEND-Website"
                className="btn"
                target="_blank"
              >
                <span>Github</span>
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://jim440.github.io/ASEND-Website/"
                className="btn "
                target="_blank"
              >
                <span>Live Demo</span> <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="project">
            <img src="img/sass library.jpg" alt="" />
            <div>
              <p className="header">Light-weight CSS Library</p>
              <p className="description">
                This is a light weight CSS library, similar to tailwind CSS,
                where users can design websites using utility classes.
                <p className="bold">HTML | CSS | Javascript</p>
              </p>
            </div>
            <div className="buttons">
              <a
                href="https://github.com/JIM440/Build-CSS-library-with-SASS"
                className="btn"
                target="_blank"
              >
                <span>Github</span>
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://jim440.github.io/Build-CSS-library-with-SASS/"
                className="btn "
                target="_blank"
              >
                <span>Live Demo</span> <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="project">
            <img src="img/school.jpg" alt="" />
            <div className="text">
              <p className="header">Multipage School Website</p>
              <p className="description">
                A multipage website for a school displaying the schools info,
                staffs and courses they offer.{' '}
                <p className="bold">HTML | CSS | Javascript</p>
              </p>
            </div>
            <div className="buttons">
              <a
                href="https://github.com/JIM440/MultiPage-School-Website"
                className="btn"
                target="_blank"
              >
                <span>Github</span>
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://jim440.github.io/MultiPage-School-Website/"
                className="btn "
                target="_blank"
              >
                <span>Live Demo</span> <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default project;
