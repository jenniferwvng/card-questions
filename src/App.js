import { useState } from "react"
import './App.css';

import Header from "./Header";
import QuestionDisplay from './components/QuestionDisplay.js'
import QuestionButtons from './components/QuestionButtons.js'
import questions from "./questions"

const App = () => {
  const [state, setState] = useState(0);

  return (
    <div className="App">
        <Header headerTitle="12am deep questions quiz"/>
        <QuestionDisplay state={state}/>
        <QuestionButtons state={state} setState={setState} />
        <p>Question {state + 1} of {questions.length}</p>
    </div>  
  );
}


export default App;