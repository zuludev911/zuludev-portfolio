import React from "react";
import profilePicture from "../assets/profile2.png";
import "./components.css";

function AboutMeSection() {
  return (
    <section className="section about-me-section" id="about-me">
      <div className="about-me-content">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <div className="about-me-text">
          <h1 className="section-title">Sobre mi</h1>
          <p className="section-description">
            Soy desarrollador frontend con enfoque en React Native, amante de la
            tecnología, el aprendizaje continuo y la enseñanza. También creo
            contenido educativo en redes sociales para ayudar a otros a empezar
            en el mundo del desarrollo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
