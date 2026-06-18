import "../styles/footer.css";

import logo from "../assets/images/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <img
            src={logo}
            alt="Lengua Viva"
          />

          <p>
            Aprenda espanhol com leveza,
            prática e conexão real.
          </p>

        </div>

        <div className="footer-links">

          <h4>Navegação</h4>

          <a href="#inicio">Início</a>

          <a href="#cursos">Cursos</a>

          <a href="#sobre">Sobre</a>

          <a href="#faq">FAQ</a>

        </div>

        <div className="footer-social">

          <h4>Contato</h4>

          <a href="#">
            Instagram
          </a>

          <a href="#">
            WhatsApp
          </a>

          <a href="#">
            Email
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Lengua Viva. Todos os direitos reservados.
        </p>

      </div>

    </footer>
  );
}