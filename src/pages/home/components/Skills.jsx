import React from 'react';

const Skills = () => {
  return (
    <section class="skills" id="skills">
      <div class="container">
        <h2 class="header">My Skills 😎</h2>
        <p class="header-description">Expertise and Skills</p>
        <div class="skills-container">
          <div class="skill-box">
            <h2 class="header">Web Development</h2>
            <div class="skill-box-content">
              <div>
                <h3 class="header">Frontend</h3>
                <ul>
                  <li>HTML | CSS</li>
                  <li>Tailwind | Bootstrap | SASS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Web Design</li>
                </ul>
              </div>
              <div>
                <h3 class="header">Backend</h3>
                <ul>
                  <li> NodeJS (Express)</li>
                  <li>SQL Databasess</li>
                  <li>NoSQL Databases</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="skill-box">
            <h2 class="header">Others</h2>
            <div class="skill-box-content">
              <div>
                <h3 class="header">Mobile </h3>
                <ul>
                  <li>React Native</li>
                  <li>Firebase</li>
                </ul>
                <h3 class="header">Design </h3>
                <ul>
                  <li>UI/UX Design</li>
                </ul>
              </div>
              <div>
                <h3 class="header">Data Analysis</h3>
                <ul>
                  <li>Excel</li>
                  <li>SQL</li>
                  <li>Power BI</li>
                  <li>Python | SPSS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
