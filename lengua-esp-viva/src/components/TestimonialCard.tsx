import "../styles/testemonialCard.css";

interface TestimonialCardProps {
  nome: string;
  cargo: string;
  foto: string;
  depoimento: string;
  estrelas: number;
}

export default function TestimonialCard({
  nome,
  cargo,
  foto,
  depoimento,
  estrelas,
}: TestimonialCardProps) {
  return (
    <div className="testemunho-card">
      <img src={foto} alt={nome} />

      <span className="stars">
        {"⭐".repeat(estrelas)}
      </span>

      <p>{depoimento}</p>

      <h4>{nome}</h4>
      <span>{cargo}</span>
    </div>
  );
}