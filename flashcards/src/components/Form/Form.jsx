import { useState } from "react";

export default function Form() {
  // We want to take the input of Question and Answer and store it in an object
  // We click an Add button and sends that object down to Flashcards

  const [question, setQuestion] = useState(["Test 1"]);
  const [answer, setAnswer] = useState("Test 2");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log("Example", form, formData.entries());
  }

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <input name="question" defaultValue="Question"></input>
        <input name="answer" defaultValue="Answer"></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
