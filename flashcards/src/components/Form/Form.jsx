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

// export default function Form() {
//     // State for the input fields
//     const [question, setQuestion] = useState("");
//     const [answer, setAnswer] = useState("");

//     function handleSubmit() {
//       // Create the flashcard object
//       const flashcard = { question, answer };

//       // Pass the flashcard object to the parent component
//       addFlashcard(flashcard);

//       // Clear the input fields after submitting
//       setQuestion("");
//       setAnswer("");
//     }

//     return (
//       <div>
//         <input
//           className="Question"
//           placeholder="Question"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />
//         <input
//           className="Answer"
//           placeholder="Answer"
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//         />
//         <button onClick={handleSubmit}>Add</button>
//       </div>
//     );
//   }
