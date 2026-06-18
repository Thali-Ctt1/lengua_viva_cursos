import "../styles/planos.css";

const plans = [
  {
    name: "Básico",
    price: "R$ 29,00",
    features: ["Acesso ao conteúdo básico", "Suporte por e-mail"]
  },
  {
    name: "Pro",
    price: "R$ 59,00",
    features: ["Tudo do básico", "Aulas exclusivas", "Certificado"]
  },
  {
    name: "Premium",
    price: "R$ 99,00",
    features: ["Suporte 24h", "Mentoria personalizada", "Webinars mensais"]
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

              <button className="btn  btn-primary">
                <a href="#contato">
                  Assinar
                </a>
              </button>
          </div>
        ))}
      </div>
    </section>
  );
}