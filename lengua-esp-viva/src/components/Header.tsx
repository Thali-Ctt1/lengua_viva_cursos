import "../styles/header.css";

import logo from "../assets/images/logo.svg";
import Button from "./Button";

export default function Header() {
  return (
    <header className="header">

      <div className="header-container">

        <a href="#inicio" className="logo">
          <img src={logo} alt="logo lengua viva" />
        </a>

        <nav className="nav">

          <a href="#inicio">Início</a>

          <a href="#cursos">Cursos</a>

          <a href="#planos">Planos</a>

          <a href="#faq">FAQ</a>

          <a href="#contato">Contato</a>

        </nav>

        <Button
          text="Fale comigo"
          link=""
          variant="primary"
         />

      </div>

    </header>
  );
}