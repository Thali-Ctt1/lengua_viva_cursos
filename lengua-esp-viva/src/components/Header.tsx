import { useState } from "react";
import "../styles/header.css";
import logo from "../assets/images/logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo lengua viva" />
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
        <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
        <a href="#cursos" onClick={() => setMenuOpen(false)}>Cursos</a>
        <a href="#planos" onClick={() => setMenuOpen(false)}>Planos</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
      </nav>
    </header>
  );
}