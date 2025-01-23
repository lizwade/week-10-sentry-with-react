import { useState } from "react";
import "./Flashcard.css";

function Flashcard({ answer, question }) {
  //needs to be clickable - let's use <article>
  //should show "front info" at first
  //should show "back info" when clicked
  //should have a cross in top right that when clicked closes the card (return it to the list?)

  const [isClicked, setIsClicked] = useState(false);

  function flipCard() {
    setIsClicked(!isClicked);
  }

  if (isClicked) {
    return (
      <article className="cardContainer answer" onClick={flipCard}>
        {/* perhaps here we shouldn't flip card but close it? */}

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
