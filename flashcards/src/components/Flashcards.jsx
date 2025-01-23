// import { useState } from 'react';
import Flashcard from "./Flashcard.jsx";

function Flashcards({ data }) {
  return (
    <div className="flashcards">
      {data.map((item, index) => (
        <Flashcard
          key={index}
          question={data[index][0]}
          answer={data[index][1]}
        />
      ))}
    </div>
  );
}

export default Flashcards;
