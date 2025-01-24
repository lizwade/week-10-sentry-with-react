import "./App.css";
import { useState } from "react";
import Flashcards from "./components/Flashcard/Flashcards/Flashcards.jsx";
import Form from "./components/Form/Form.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [qAndA, setQAndA] = useState([
    [
      "What do we call variables that we pass down to other components?",
      "props",
    ],
    [
      "Why should you use state instead of local variables for values we want to display in components?",
      "Because otherwise React can't keep track of its value and won't re-render to change what's displayed.",
    ],
    [
      "In what direction does data move in React?",
      "From parent to child in a unidirectional flow.",
    ],
    [
      "How do you mutate a component's state?",
      "You should never mutate state - it is read-only. Make a copy if necessary.",
    ],
  ]);

  // Function to add a new flashcard updated the useStateabove with data that is passed into it from the form 
  const addFlashcard = (question, answer) => {
    setQAndA((prevQAndA) => [...prevQAndA, [question, answer]]);
  };
  //Atempt to make a delete function 
  const deleteFlashcard = (index) => {
    setQAndA((prevQAndA) => prevQAndA.filter((_, i) => i !== index));
  };

  return (
    <div className="main-content">
      <Header />
      <Form onAddFlashcard={addFlashcard} />
      <Flashcards data={qAndA} onDeleteFlashcard={deleteFlashcard} />
      <Footer />
    </div>
  );
}

export default App;
