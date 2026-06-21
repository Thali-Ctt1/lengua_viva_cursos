import "../styles/solutions.css";
import Card from "./Card";

import basico from "../assets/icons/icon_book.svg";
import aviao from "../assets/icons/icon_business.svg";
import conversacao from "../assets/icons/icon_chat.svg";


export default function Solutions() {
  return (
    <section id="solucoes" className="solutions">
      <div className="container">

        <span className="section-tag">Soluções</span>

        <h2>Como podemos ajudar você</h2>

        <p className="section-description">
          Soluções personalizadas para aprender espanhol de forma prática,
          dinâmica e adaptada aos seus objetivos.
        </p>

        <div className="solutions-grid">

          <Card
            icon={basico}
            title="Aulas Particulares"
            description="Aulas individuais focadas nas suas necessidades e ritmo de aprendizagem."
          />

          <Card
            icon={aviao}
            title="Conversação"
            description="Desenvolva fluência e confiança para situações reais do dia a dia."
          />

          <Card
            icon={conversacao}
            title="Preparação Específica"
            description="Espanhol para viagens, trabalho, intercâmbio e objetivos profissionais."
          />

        </div>

      </div>
    </section>
  );
}