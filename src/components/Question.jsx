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
            var index = answers.indexOf(question.correct_answer)
            var nC = buttonColors
            nC[index] = "success"
            setButtonColors(nC)

            checkAnswer(answer, question.correct_answer, question.difficulty)
            setAnswered(true)
        }
    }

    // // funnction for generating button color , takes in the answer and the correct answer and returns a color
    // function buttonColor(answer, correctAnswer) {
    //     if (answered) {
    //         if (answer === correctAnswer) {
    //             return "success"
    //         } else {
    //             return "error"
    //         }
    //     } else {
    //         return "primary"
    //     }
    // }

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