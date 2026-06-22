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
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        
        body: JSON.stringify({
          email: formData.email,
          message: `Nome: ${formData.nome}\n\nMensagem:\n${formData.mensagem}` 
        }),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso! 🎉");
        setFormData({
          nome: "",
          email: "",
          mensagem: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Erro ao enviar: ${errorData.error || "Tente novamente."}`);
      }
    } catch {
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <section className="contato" id="contato">
      <div className="container">
        <span className="section-badge">
          Contato
        </span>
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