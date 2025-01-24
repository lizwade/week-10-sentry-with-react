import { useState } from "react";

export default function Form({ onAddFlashcard }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!question.trim() || !answer.trim()) return;

    // Call the function passed from parent to add the flashcard
    onAddFlashcard(question, answer);

    // resets the inputs after submiting. 
    setQuestion("");
    setAnswer("");
  }

  return (
    <div className="formBox">
      <form onSubmit={handleSubmit}>
        <input
          name="question"
          //Input data goes to the question useState
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter question"
        />
        <input
          name="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter answer"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
