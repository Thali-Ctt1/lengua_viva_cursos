import "../styles/hero.css";
import heroImage from "../assets/images/heroImage.jpg"
import Button from "./Button";

export default function Hero() {
  return (
    <section className="hero" id="inicio">

      <div className="hero__container">

        {/* Conteúdo */}

        <div className="hero__content">

          <span className="hero__badge">
            Espanhol que conecta
          </span>

          <h1>
            Fale espanhol.
            <span> Viva novas histórias.</span>
          </h1>

          <p>
            Cursos particulares de espanhol para todos os níveis,
            com uma metodologia prática, comunicativa
            e feita para a vida real.
          </p>

          <div className="hero__buttons">

            <Button
              text="Conheça os cursos"
              link="#cursos"
              variant="primary"
            />

            <Button
              text="Fale comigo"
              link="#contato"
              variant="secondary"
            />

          </div>

        </div>

        {/* Imagem */}

        <div className="hero__image-wrapper">

          <div className="blob-yellow"></div>
          <div className="blob-rose"></div>

          <img
            src={heroImage}
            alt="Aprender espanhol"
            className="hero__image"
          />

        </div>

      </div>

    </section>
  );
}