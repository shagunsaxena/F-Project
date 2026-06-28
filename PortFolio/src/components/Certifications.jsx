import React from 'react'

import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Generative AI Overview for Project Managers",
    issuer: "Project Management Institute",
    date: "2026",
    link: "https://www.credly.com/badges/24f6c747-f5ac-446e-890e-f3903d778dae",
  },
  {
    title: "AI Business Analysis",
    issuer: "IIBA",
    date: "2026",
    link: "#",
  },
  {
    title: "Agile Methodology",
    issuer: "Cognizant",
    date: "2024",
    link: "#",
  },
  {
    title: "React Course",
    issuer: "Udemy",
    date: "2025",
    link: "#",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <h2>Certifications</h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <FaCertificate className="cert-icon" />

              <h3>{cert.title}</h3>

              <p>{cert.issuer}</p>

              <span>{cert.date}</span>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
              >
                View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;