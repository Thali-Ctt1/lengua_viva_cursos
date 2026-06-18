import "../styles/solutions.css";
import Card from "./Card";
import book from "../assets/icons/icon_book.svg";
import chat from "../assets/icons/icon_chat.svg";
import business from "../assets/icons/icon_business.svg";

export default function Solutions() {
  return (
    <section className="solutions" id="cursos">
      <div className="solutions-container">
        <h2>Escolha seu caminho no espanhol</h2>

        <div className="solutions-grid">
          <Card
            icon={book}
            title="Espanhol Básico"
            description="Aprenda espanhol do zero de forma prática."
          />

          <Card
            icon={chat}
            title="Conversação"
            description="Desenvolva confiança para conversar."
          />

          <Card
            icon={business}
            title="Espanhol para negócios"
            description="Espanhol voltado para o ambiente profissional."
          />
        </div>
      </div>
    </section>
  );
}