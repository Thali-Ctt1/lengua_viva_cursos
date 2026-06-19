import { FormEvent, useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './styles/contactform.css';

const ContactForm = () => {
  // 1. Estados tipados corretamente para aceitar strings ou nulo (no caso do token)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  // 2. Definindo explicitamente o tipo do reCAPTCHA na referência
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  function isValidForm() {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.message.trim() !== '' &&
      recaptchaToken !== null
    );
  }

  async function handleSendEmail() {
    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          message: `Nome: ${formData.name}\n\nMensagem: ${formData.message}`,
          recaptchaToken: recaptchaToken, 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFeedbackMessage('Mensagem enviada com sucesso!');
        resetFields();
      } else {
        setFeedbackMessage(`Erro: ${data.error || 'Falha ao enviar.'}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setFeedbackMessage('Não foi possível enviar a mensagem no momento.');
    }
  }

  // 3. Adicionando o tipo FormEvent para o evento de submit
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isValidForm()) {
      setFeedbackMessage('Por favor, preencha todos os campos e marque o reCAPTCHA.');
      return;
    }

    await handleSendEmail();
  }

  // 4. Tipando o parâmetro token que o Google devolve
  function handleCompleteChallenge(token: string | null) {
    setRecaptchaToken(token);
  }

  function resetFields() {
    setFormData({ name: '', email: '', message: '' });
    setRecaptchaToken(null);
    recaptchaRef.current?.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Mensagem:
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </label>
      </div>

      <div>
        <ReCAPTCHA 
          ref={recaptchaRef} 
          sitekey="6LcvESktAAAAAJdaoKjXys3ph_mbQAp0ejUeNZbb" 
          onChange={handleCompleteChallenge} 
        />
      </div>

      <button type="submit">Enviar Mensagem</button>

      {feedbackMessage && <p>{feedbackMessage}</p>}
    </form>
  );
};

export default ContactForm;