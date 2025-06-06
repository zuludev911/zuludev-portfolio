import React from "react";
import project1 from "../assets/logo_cive.png";
import project2 from "../assets/sta.png";
import "./components.css";

const projects = [
  {
    name: "CIVE",
    description:
      "CIVE es un software de control de inventario y ventas para comercios de venta al por menor, desarrollado en Java con base de datos en MySQL.",
    image: project1,
  },
  {
    name: "Sistema de Transporte",
    description:
      "Sistema para empresas de transporte intermunicipal funciones de venta de tiquetes y registro de remesas, separado en backend en Laravel y frontend en React y base de datos en MySQL.",
    image: project2,
  },
  // {
  //   name: "Landing Page Cafe épico",
  //   description:
  //     "Landing Page para el cafe épico, un cafe de Pereira, Colombia, desarrollado en Atom.",
  //   image: project2,
  // },
  {
    name: "Registro ingreso",
    description:
      "Software de escritorio para registrar ingreso y salida de personal de la empresa, desarrollado en Java.",
    image: project2,
  },
  {
    name: "Verdad o reto",
    description:
      "Juego de preguntas y retos desarrollado en react-native-expo y uso de react-native-reanimated",
    image: project2,
  },
];

function MyProjects() {
  return (
    <section className="section my-projects-section" id="projects">
      <h1 className="section-title">Mis proyectos</h1>
      <div className="projects-container">
        {projects.map(({ image, name, description }) => (
          <div className="project-card">
            <div className="img-container">
              <img src={image} alt={name} className="project-image" />
            </div>
            <div className="project-card-title">
              <h2>{name}</h2>
            </div>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
