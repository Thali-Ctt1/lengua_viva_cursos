import "../styles/about.css";
import aboutImage from "../assets/images/about-bg.jpg";

export default function About() {
  return (
    <section
      id="sobre"
      className="about"
      style={{
        backgroundImage: `url(${aboutImage})`,
      }}
    >
      <div className="about-overlay">

        <span className="about-tag">
          Sobre Nós
        </span>

        <h2>
          Aprender espanhol é abrir portas para novas experiências
        </h2>

        <p>
          Na Lengua Viva, acreditamos que aprender um idioma vai muito
          além da gramática. Nosso objetivo é conectar pessoas a novas
          culturas, oportunidades e histórias através do espanhol.
        </p>

        <div className="about-stats">

          <div className="stat">
            <h3>50+</h3>
            <span>Alunos</span>
          </div>

          <div className="stat">
            <h3>500+</h3>
            <span>Horas de aula</span>
          </div>

          <div className="stat">
            <h3>100%</h3>
            <span>Personalizado</span>
          </div>

        </div>

      </div>
    </section>
  );
}