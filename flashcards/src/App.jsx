import "./App.css";
import { useState } from "react";
import Flashcards from "./components/Flashcards.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  const [qAndA, setQAndA] = useState([
    [
      "What do we call variables that we pass down to other components?",
      "props",
    ],
    [
      "Why should you use state insted of local variables for values we want to display in components?",
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

  // first square brackets specify which qAndA. Second specify Question [0] or Answer [1]
  //console.log(qAndA[0][1]);

  return (
    <>
      <Form />
      <Flashcards data={qAndA} />
    </>
  );
}

export default App;
