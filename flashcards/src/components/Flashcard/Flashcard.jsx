import { useState } from "react";
import "./Flashcard.css";

function Flashcard({ question, answer }) {
  const [isClicked, setIsClicked] = useState(false);

  function flipCard() {
    setIsClicked(!isClicked);
  }

  if (isClicked) {
    return (
      <article className="cardContainer answer" onClick={flipCard}>
        <div className="cancelSection">
          <button className="cancelButton">❌</button>
        </div>

        <div className="cardContent">
          <h2>🤯</h2>
          <p>{answer}</p>
        </div>
      </article>
    );
  } else {
    return (
      <article className="cardContainer question" onClick={flipCard}>
        <div className="cancelSection">
          <button className="cancelButton">❌</button>
        </div>
        <div className="cardContent">
          <h2>🤨</h2>
          <p>{question}</p>
        </div>
      </article>
    );
  }
}

export default Flashcard;
