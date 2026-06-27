import React from 'react';
import profileImage from "../assets/images/profilePic.jpeg";

const About = () => {
  return (
    <section id="about" className='about-section'>
      <div className="about-container">
        
        <div className="about-image">
          <img 
          src={profileImage}
          alt="Shagun ProfileImage" 
          />
        </div>

        <div className="about-content">

          <h2>About Me</h2>

          <p>
            I'm a Frontend Developer and Business Analyst with experience
            translating business requirements into scalable digital solutions.
          </p>

          <p>
            My expertise spans React, JavaScript, stakeholder management,
            requirement gathering, process improvement, and API integrations.
          </p>

          <p>
            Currently, I am expanding my expertise toward Product Management
            while continuing to build modern web applications.
          </p>

          <div className="about-stats">
            <div>
              <h3>5+</h3>
              <span>Years Experience</span>
            </div>

            <div>
              <h3>10+</h3>
              <span>Projects</span>
            </div>

            <div>
              <h3>5+</h3>
              <span>Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About