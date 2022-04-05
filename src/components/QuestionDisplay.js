import questions from "../questions"

const QuestionDisplay = ({state}) => {
    return (
        <article style={{width: "40vw"}}>
        {questions[state].contentText.map((question) => (
            <h1 key={question.key}>{question.content}</h1>
        ))}
        </article>
    )
}

export default QuestionDisplay 


