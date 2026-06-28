import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [

   {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing frontend, business analysis and product management skills.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tech: ["React","JS", "CSS", "Responsive Design"],
    github: "#",
    demo: "https://www.shagunsaxena.in",
  },
  {
    title: "AI ChatBot",
    description:
      "AI ChatBot created using Google Gemini API. Look and feel same as gemini ",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tech: ["HTML", "JavaScript", "CSS", "Gemini API"],
    github: "https://github.com/shagunsaxena/F-Project/tree/master/aiChatBot",
    demo: "https://f-project-aichatbot.vercel.app/",
  },
  {
    title: "Product Case Study",
    description:
      "The objective of this project is to design and develop a premium, interactive product microsite.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
    tech: ["BRD", "FRD", "SRS", "UAT"],
    github: "https://github.com/shagunsaxena/F-Project/tree/master/CaseStudyDoc",
    demo: "https://github.com/shagunsaxena/F-Project/tree/master/CaseStudyDoc",
  },
  
];


const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <div className="project-container">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          {projects.map((project,index) =>(
            <div className="project-card" key={index}>
              
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">

                  <a href={project.github}>
                    <FaGithub />
                    Github
                  </a>

                  <a href={project.demo}>
                    <FiExternalLink />
                    Live Demo
                  </a>

                </div>
              </div>
            </div>
          ) )}
        </div>
      </div>
    </section>
  )
}

export default Projects;