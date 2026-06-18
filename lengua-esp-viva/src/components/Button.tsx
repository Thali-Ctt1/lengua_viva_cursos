import "../styles/button.css";

interface ButtonProps {
  text: string;
  link: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  text,
  link,
  variant = "primary",
}: ButtonProps) {
  return (
    <a
      href={link}
      className={`btn btn-${variant}`}
    >
      {text}
    </a>
  );
}