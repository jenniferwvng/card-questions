import PropTypes from 'prop-types';
import questions from "../questions"
import styled from 'styled-components';

const Button = styled.button`
    background-color: white;
    padding: 30px;
    margin: 10px;
    border: none;
    border-radius: 25px;

    &:hover {
        filter: brightness(50%);
    }
`

const QuestionButtons = ({state, setState}) => {

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
        <span> 
          <Button onClick={prevQuestion}>&#10096; Prev</Button>
          <Button onClick={nextQuestion}>Next &#10097;</Button>
        </span>
    )
}

QuestionButtons.propTypes = {
    nextQuestion: PropTypes.func,
    prevQuestion: PropTypes.func
}

export default QuestionButtons 


