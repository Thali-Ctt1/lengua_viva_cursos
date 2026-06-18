import "../styles/planos.css";

const plans = [
  {
    name: "Básico",
    price: "R$ 29",
    features: ["Acesso ao conteúdo básico", "Suporte por e-mail"]
  },
  {
    name: "Pro",
    price: "R$ 59",
    features: ["Tudo do básico", "Aulas completas", "Suporte prioritário"]
  },
  {
    name: "Premium",
    price: "R$ 99",
    features: ["Tudo incluso", "Suporte 24h", "Certificado"]
  }
];

export default function Planos() {
  return (
    <section className="planos">
      <h2>Planos</h2>

      <div className="planos-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plano-card ${plan.name === "Pro" ? "destaque" : ""}`}
          >
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>

            <ul>
              {plan.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <button>Assinar</button>
          </div>
        ))}
      </div>
    </section>
  );
}