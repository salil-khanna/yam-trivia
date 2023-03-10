import React, {useState} from 'react'
import Button from '@mui/material/Button';

const Question = ({question, index, checkAnswer, answers}) => {
    const [answered, setAnswered] = useState(false)

    var bColors = []
    answers.forEach(answer => {
        bColors.push("primary")
    })
    const [buttonColors, setButtonColors] = useState(bColors)

    function answerQuestion(e) {
        if (!answered) {
            var answer = e.target.value
            if (answer !== question.correct_answer) {
                // find index 
                var index = answers.indexOf(answer)
                var newColors = buttonColors
                newColors[index] = "error"
                setButtonColors(newColors)
            } 
            var id = answers.indexOf(question.correct_answer)
            var nC = buttonColors
            nC[id] = "success"
            setButtonColors(nC)

            checkAnswer(answer, question.correct_answer, question.difficulty)
            setAnswered(true)
        }
    }

    return (
        <div>
            
            <h3>{index + 1}. {decodeURIComponent(question.question)}</h3>
            {answers.map((answer, index) => {
                return (
                    <Button 
                        key={index} 
                        variant="contained" 
                        value={answer} 
                        onClick={answerQuestion}
                        color={buttonColors[index]}
                        >
                        {decodeURIComponent(answer)}
                    </Button>
                )
            })}
        </div>
    )
}

export default Question