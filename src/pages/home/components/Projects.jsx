import React from 'react';
import warehouse from '../../../assets/img/warehouse.jpg';
import agm from '../../../assets/img/agm.jpg';
import asend from '../../../assets/img/asend1.jpg';
import css_library from '../../../assets/img/css_library.jpg';

const project = () => {
  const projects = [
    {
      image: warehouse,
      header: 'Three Tier Application and Data Warehouse',
      description:
        'A data warehouse used to analyze data from a chat application.',
      technologies: ['HTML | CSS | Chart JS | Node.js | Express | MongoDB'],
      githubUrl: 'https://github.com/JIM440/Data-Analysis-Projects',
      liveDemoUrl: 'https://github.com/JIM440/Data-Analysis-Projects',
    },
    {
      image: asend,
      header: 'ASEND WEBSITE',
      description:
        'A multipag website for a prep group that prepares students for professional exams.',
      technologies: 'React | SASS',
      githubUrl: 'https://github.com/JIM440/ASEND-Website',
      liveDemoUrl: 'https://asend-website.vercel.app/',
    },
    {
      image: agm,
      header: 'AGM WEBSITE',
      description:
        'A multipage website for the Apostolic Gospel Mission Kumba.',
      technologies: 'React | SASS',
      githubUrl: 'https://github.com/JIM440/AGM-Website',
      liveDemoUrl: 'https://agm-website-react.vercel.app/',
    },
    {
      image: css_library,
      header: 'CSS LIBRARY',
      description:
        'This is a light weight CSS library, similar to tailwind CSS, where users can design websites using utility classes.',
      technologies: 'HTML | JS | SASS',
      githubUrl: 'https://github.com/JIM440/CSS-Library-with-SASS',
      liveDemoUrl: 'https://jim440.github.io/CSS-Library-with-SASS/s',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="header">My projects 👨‍💻</h2>
        <p className="header-description">Check out some of my projects</p>
        <div className="project-container">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.image} alt="" />
              <div>
                <p className="header">{project.header}</p>
                <p className="description">{project.description}</p>
                <p className="bold">{project.technologies}</p>
              </div>
              <div className="buttons">
                <a
                  aria-label=""
                  href={`${project.githubUrl}`}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Github</span>
                  <i className="bx bxl-github"></i>
                </a>
                <a
                  aria-label=""
                  href={`${project.liveDemoUrl}`}
                  className="btn "
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Live Demo</span> <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default project;
