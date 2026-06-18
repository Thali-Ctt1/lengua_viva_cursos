import { useState } from "react";

import "../styles/faq.css";

export default function FAQ() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Como funcionam as aulas?",
      answer:
        "As aulas são online, ao vivo e personalizadas para cada aluno.",
    },
    {
      question: "Preciso ter conhecimento prévio?",
      answer:
        "Não. Existem cursos para iniciantes e níveis avançados.",
    },
    {
      question: "As aulas são individuais?",
      answer:
        "Sim, as aulas podem ser individuais ou em pequenos grupos.",
    },
  ];

  return (
    <section className="faq" id="faq">

      <div className="faq-container">

        <span className="section-badge">
          FAQ
        </span>

        <h2>
          Perguntas frequentes
        </h2>

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="faq-item"
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                {faq.question}

                <span>
                  {activeIndex === index ? "−" : "+"}
                </span>

              </button>

              {activeIndex === index && (
                <p className="faq-answer">
                  {faq.answer}
                </p>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}