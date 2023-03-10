import React, {useEffect, useState} from 'react'
import Question from './Question'

const GameRunning = ({questions, gameOver, seconds, answers}) => {
    const [score, setScore] = useState(0)
    const [questionsAnswered, setQuestionsAnswered] = useState(0)

    var startState = questions.length * 10
    if (seconds.length > 0) {
        startState = Number(seconds)
    }
    const [timer, setTimer] = useState(startState)


    useEffect(() => {
        setTimeout(() => {
            setTimer(timer - 1)
        }, 1000)
    }, [timer])


    // useEffect to check if all questions have been answered
    useEffect(() => {
        if (timer === 0 || questionsAnswered === questions.length) {
            gameOver(score, questionsAnswered)
        }
    }, [gameOver, questions.length, questionsAnswered, score, timer])
    
    function checkAnswer(answer, correctAnswer, difficulty) {
        if (answer === correctAnswer) {
            var scoreVal = 10
            if (difficulty === "medium") {
                scoreVal = 20
            } else if (difficulty === "hard") {
                scoreVal = 30
            }

            setScore(score + scoreVal)
        }
        setQuestionsAnswered(questionsAnswered + 1)
    }

  return (
    <div>
        {/* end game button */}
        <h2>Game has Started! </h2>
        <h3>{timer} seconds left... </h3>
        <button onClick={() => gameOver(score, questionsAnswered)}>End Game</button>

        
        {/* for each question in questions print out the question */}


        {/* create a question component */}
        {questions.map((question, index) => {
            return (
                <div key={index}>
                    <Question question={question} index={index} checkAnswer={checkAnswer} answers={answers[index]}/>
                </div>
            )
        })}


        
        
    </div>
  )
}

export default GameRunning