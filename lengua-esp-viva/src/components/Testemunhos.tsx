import "../styles/testemunhos.css";

interface Testemunhos {
  id: number;
  nome: string;
  cargo: string;
  foto: string;
  depoimento: string;
}

const testemunhos: Testemunhos[] = [
  {
    id: 1,
    nome: "Maria Silva",
    cargo: "Curso Básico",
    foto: "https://i.pravatar.cc/150?img=5",
    depoimento:
      "Em poucos meses consegui fazer minhas primeiras conversas em espanhol e perdi o medo de falar.",
  },
  {
    id: 2,
    nome: "Lucas Ferreira",
    cargo: "Conversação",
    foto: "https://i.pravatar.cc/150?img=11",
    depoimento:
      "As aulas são muito práticas e hoje consigo entender séries e conversar com nativos.",
  },
  {
    id: 3,
    nome: "Ana Souza",
    cargo: "Espanhol para Negócios",
    foto: "https://i.pravatar.cc/150?img=9",
    depoimento:
      "O curso me ajudou a conseguir uma promoção no trabalho e participar de reuniões internacionais.",
  },
];

export default function Testimonials() {
  return (
    <section className="testemunhos" id="depoimentos">
      <div className="testemunhos-container">
        <span className="section-badge">
          Depoimentos
        </span>

        <h2>Cada aluno importa!</h2>

        <p className="testemunhos-subtitle">
          Veja como nossos alunos estão evoluindo no espanhol e ganhando mais
          confiança para conversar.
        </p>

        <div className="testemunhos-grid">
          {testemunhos.map((item) => (
            <div className="testemunho-card" key={item.id}>
              <img src={item.foto} alt={item.nome} />

              <span className="stars">
                ⭐⭐⭐⭐⭐
              </span>

              <p>{item.depoimento}</p>

              <h4>{item.nome}</h4>
              <span>{item.cargo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}