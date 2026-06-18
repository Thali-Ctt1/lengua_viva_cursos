import "../styles/card.css";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export default function Card({
  icon,
  title,
  description,
}: CardProps) {
  return (
    <div className="card">
      <span className="card-icon">
        <img src={icon} alt={title} />
      </span>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}