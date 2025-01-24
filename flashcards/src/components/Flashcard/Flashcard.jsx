import { useState } from "react";
import "./Flashcard.css";

function Flashcard({ question, answer, onDelete  }) {
  const [isClicked, setIsClicked] = useState(false);

  function flipCard() {
    setIsClicked(!isClicked);
  }

  if (isClicked) {
    return (

      // I think we can condense these to one instead of fliping between two different sets of code...Food for thought!
      <article className="cardContainer answer" onClick={flipCard}>
        <div className="cancelSection">
          <button className="cancelButton" onClick={(e) => {
            e.stopPropagation(); // Stops card flipping when clicking the delete button
            onDelete();
          }}>❌</button>
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
          <button className="cancelButton"onClick={(e) => {
            e.stopPropagation(); // Prevent card flipping when clicking the delete button
            onDelete();
          }}>❌</button>
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
