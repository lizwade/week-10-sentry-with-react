import react from "../../assets/react.svg";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo spin" src={react} alt="React Logo"></img>
      <h1>React Flashcards</h1>
      <p>🧠Expand your knowledge, One Flashcard At A Time!🐌</p>
    </div>
  );
}
