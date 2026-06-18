import "../styles/contato.css";
import { useState } from "react";

export function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({
          nome: "",
          email: "",
          mensagem: "",
        });
      } else {
        alert("Erro ao enviar mensagem.");
      }
    } catch {
      alert("Erro ao enviar mensagem.");
    }
  };

  return (
    <section className="contato" id="contato">
      <div className="container">
        <h2>Entre em Contato</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="mensagem"
            placeholder="Sua mensagem"
            rows={5}
            value={formData.mensagem}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}