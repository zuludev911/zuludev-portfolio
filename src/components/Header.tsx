import React from "react";

function Header() {
  return (
    <header className="header">
      <div>
        <a href="#">Zuludev</a>
      </div>
      <div className="header-links">
        <a href="#about-me">Sobre mi</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </div>
    </header>
  );
}

export default Header;
