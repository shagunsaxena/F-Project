import React from "react";

const experienceData = [
  {
    title: "Business Analyst",
    company: "Tata Consultancy Services",
    duration: "2025 - Present",
    description:
      "Gathered business requirements, collaborated with stakeholders, created BRDs/FRDs, supported digital transformation initiatives, learning product strategy, roadmap planning, user stories, backlog prioritization, and product thinking.",
  },
  {
    title: "Integration Developer",
    company: "Tata Consultancy Services",
    duration: "2024 - 2025",
    description:
      "Built REST APIs using IBM API Connect.",
  },
  {
    title: "Frontend Developer",
    company: "Tata Consultancy Services",
    duration: "2021 - 2024",
    description:
      "Built responsive web applications using React, JavaScript, REST APIs, and modern frontend development practices.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2>Experience</h2>

        <div className="timeline">
          {experienceData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <span>{item.duration}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;