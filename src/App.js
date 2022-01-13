import questions from "./questions"
import { useState } from "react"
import Header from "./Header";
import './App.css';

function App() {
  const [state, setState] = useState(0);

  const moveNext = state + 1;
  const movePrev = state - 1;

  const prevQuestion = () => {
    if (movePrev < questions.length && movePrev >= 0) {
      console.log("move to prev question"); 
      setState(movePrev);
    } else {
      console.log("No previous questions"); 
    }
  }
  
  const nextQuestion = () => {
    if (moveNext < questions.length) {
      setState(moveNext);
      console.log("move to next question"); 
    } else {
      console.log("No more questions"); 
    }
  }

  return (
    <div className="App">
        <Header headerTitle="12am deep questions quiz"/>

        <article style={{width: "40vw"}}>
          {questions[state].contentText.map((question) => (<h1 key={question.key}>{question.content}</h1>))}
        </article>
        <span> 
          <button style={{padding: "30px", margin: "30px"}} onClick={prevQuestion}>&#10096; Prev</button>
          <button style={{padding: "30px"}} onClick={nextQuestion}>Next &#10097;</button>
        </span>
        <p>Question {state + 1} of {questions.length}</p>
    </div>  
  );
}

export default App;