import Flashcard from "../Flashcard.jsx";

//maps through the cards after data is passed from app.jsx
function Flashcards({ data, onDeleteFlashcard }) {
  return (
    <div className="wrapper">
      {data.map((item, index) => (
        <Flashcard key={index} question={item[0]} answer={item[1]}  onDelete={() => onDeleteFlashcard(index)}/>
        
      ))}
    </div>
  );
}

export default Flashcards;
