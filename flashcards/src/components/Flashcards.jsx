// import { useState } from 'react';
import Flashcard from "./Flashcard.jsx";

export default function Flashcards() {
  return (
    <>
      <Flashcard question={"What is JSX?"} answer={"JSX is great"} />
      <Flashcard question={"What is 2 x 2"} answer={"That's 4"} />
      <Flashcard question={"What barks?"} answer={"Dog"} />
      <Flashcard question={"What comes after day?"} answer={"Night!"} />
    </>
  );
}
