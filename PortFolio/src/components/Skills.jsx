import React from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJira,
  FaFigma,
  FaGitAlt
} from "react-icons/fa";

import {
  SiConfluence, SiCypress
} from "react-icons/si";

import { MdNewReleases } from "react-icons/md";


const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <h2>Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Frontend Develpment</h3>

            <div className="skill-items">
              <span><FaReact /> React</span>
              <span><FaJs /> JavaScript</span>
              <span><FaHtml5 /> HTML5</span>
              <span><FaCss3Alt /> CSS3</span>
              <span><SiCypress /> Cypress</span>

            </div>

          </div>

          <div className="skill-card">
            <h3>Business Analysis</h3>

            <div className="skill-items">
              <span>Requirement Gathering</span>
              <span>BRD</span>
              <span>FRD</span>
              <span>User Stories</span>
              <span>Stakeholder Management</span>
            </div>

          </div>

          <div className="skill-card">
            <h3>Product Management</h3>

            <div className="skill-items">
              <span>Planning</span>
              <span>Backlog Prioritization</span>
              <span>Agile</span>
              <span>Sprint Planning</span>
              <span>UAT Verification</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Tools & Platforms</h3>

            <div className="skill-items">
              <span><FaJira /> Jira</span>
              <span><MdNewReleases /> ServiceNow</span>
              <span><FaFigma /> Figma</span>
              <span><SiConfluence /> Confluence</span>
              <span><FaGitAlt /> Git</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills