import "./App.css";
import Flashcards from "./components/Flashcards.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  const questionsAndAnswers = [
    { "What barks?": "A dog" },
    { "Meaning of life?": "42" },
  ];

  console.log(questionsAndAnswers[1].value, questionsAndAnswers[1].key);

  return (
    <>
      <Form />
      <Flashcards />
    </>
  );
}

export default App;
