import React, { useState } from 'react';
import warehouse from '../../../assets/img/warehouse.jpg';
import agm from '../../../assets/img/agm.jpg';
import asend from '../../../assets/img/asend1.jpg';
import css_library from '../../../assets/img/css_library.jpg';
import tech_explorer from '../../../assets/img/tech_explorer.png';
import medik from '../../../assets/img/medik.png';
import cost_estimate from '../../../assets/img/cost_estimate.png';
import relief_radar from '../../../assets/img/relief_radar.png';

const Project = () => {
  const projects = [
    {
      image: warehouse,
      header: 'Three Tier Application and Data Warehouse',
      description:
        'A data warehouse used to analyze data from a chat application.',
      technologies: ['HTML | CSS | Chart JS | Node.js | Express | MongoDB'],
      githubUrl: 'https://github.com/JIM440/Data-Analysis-Projects',
      liveDemoUrl: 'https://github.com/JIM440/Data-Analysis-Projects',
      category: 'web',
    },
    {
      image: asend,
      header: 'ASEND WEBSITE',
      description:
        'A multipag website for a prep group that prepares students for professional exams.',
      technologies: 'React | SASS',
      githubUrl: 'https://github.com/JIM440/ASEND-Website',
      liveDemoUrl: 'https://asend-website.vercel.app/',
      category: 'web',
    },
    {
      image: agm,
      header: 'AGM WEBSITE',
      description:
        'A multipage website for the Apostolic Gospel Mission Kumba.',
      technologies: 'React | SASS',
      githubUrl: 'https://github.com/JIM440/AGM-Website',
      liveDemoUrl: 'https://agm-website-react.vercel.app/',
      category: 'web',
    },
    {
      image: css_library,
      header: 'CSS LIBRARY',
      description:
        'This is a light weight CSS library, similar to tailwind CSS, where users can design websites using utility classes.',
      technologies: 'HTML | JS | SASS',
      githubUrl: 'https://github.com/JIM440/CSS-Library-with-SASS',
      liveDemoUrl: 'https://jim440.github.io/CSS-Library-with-SASS/',
      category: 'web',
    },
    {
      image: relief_radar,
      header: 'Relief Radar',
      description:
        'A mobile app for disaster management system, where users can report disasters, request for help, and also connect with emergency responders around the globe.',
      technologies: 'Ionic | CSS',
      githubUrl: 'https://github.com/JIM440/CEF440-group-22',
      liveDemoUrl: 'https://jim440.github.io/CEF440-group-22',
      category: 'mobile',
    },
    {
      image: cost_estimate,
      header: 'Cost Estimate LIBRARY',
      description:
        'A mobile application for calculating building estimates for various components or from foundation to roofing.',
      technologies: 'React Native',
      githubUrl: 'https://github.com/JIM440/Cost-Estimate-App',
      liveDemoUrl: 'https://jim440.github.io/Cost-Estimate-App',
      category: 'mobile',
    },
    {
      image: tech_explorer,
      header: 'Tech Explorer',
      description:
        'A mobile application to showcase tech startups, student clubs, and events in BUEA.',
      technologies: 'Figma | Figjam | Canva',
      githubUrl: '',
      liveDemoUrl:
        'https://www.figma.com/proto/hpSJrzV2xWFgycvITslb8h/Version1?page-id=0%3A1&node-id=178-1914&viewport=-668%2C14%2C0.3&t=kXWSc5hg5r5ypN7R-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=178%3A3115&show-proto-sidebar=1',
      category: 'design',
    },
    {
      image: medik,
      header: 'Medik',
      description:
        'A Telemedicine Application where users can book appointments with doctors and also receive consultation results and tests.',
      technologies: 'Figma',
      githubUrl: '',
      liveDemoUrl:
        'https://www.figma.com/proto/7cRmFBwUGvnZLbYPvMpt2V/Medik---Telemedicine-Application?page-id=1%3A3&node-id=21-67&viewport=1036%2C519%2C0.17&t=3kqoeKRpxXBrk9ov-1&scaling=min-zoom&content-scaling=fixed',
      category: 'design',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="header">My projects 👨‍💻</h2>
        <p className="header-description">Check out some of my projects</p>

        <div className="filter-buttons">
          <button
            className={selectedCategory === 'all' ? 'active' : ''}
            onClick={() => setSelectedCategory('all')}
          >
            All (8)
          </button>
          <button
            className={selectedCategory === 'web' ? 'active' : ''}
            onClick={() => setSelectedCategory('web')}
          >
            Web (4)
          </button>
          <button
            className={selectedCategory === 'mobile' ? 'active' : ''}
            onClick={() => setSelectedCategory('mobile')}
          >
            Mobile (2)
          </button>
          <button
            className={selectedCategory === 'design' ? 'active' : ''}
            onClick={() => setSelectedCategory('design')}
          >
            Design (2)
          </button>
        </div>

        <div className="project-container">
          {filteredProjects.map((project, index) => (
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
                  style={{
                    display: project.category === 'design' ? 'none' : 'flex',
                  }}
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
                  style={{
                    display: project.category === 'mobile' ? 'none' : 'flex',
                  }}
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

export default Project;
