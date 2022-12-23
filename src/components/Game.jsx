import React, {useState} from 'react'
import GameStart from './GameStart'
import GameRunning from './GameRunning'

const Game = () => {
    // create a useState called score that is set to 0

    const [firstGame, setFirstGame] = useState(true)
    const [gameRunning, setGameRunning] = useState(false)

    const [score, setScore] = useState(0)
    const [timer, setTimer] = useState('')
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])

    function gameOver(score) {

        if (score !== 0) {
            setTimeout(() => {
                setScore(score)
                setGameRunning(false)
            }
            , 750)
        } else {
            setScore(score)
            setGameRunning(false)
        }
        


    }

    async function gameStart(numQ, difficulty, category, seconds) {

        setScore(0)
        setTimer(seconds)


        var baseUrl = "https://opentdb.com/api.php?encode=url3986&amount=" + numQ
        

        // logic to generate questions
        if (difficulty !== "") {
            baseUrl += "&difficulty=" + difficulty
        }

        if (category !== "") {
            baseUrl += "&category=" + category
        }

        // run a get request on the url to get the questions and set them to the questions state
        await fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                setQuestions(data.results)

                var answers = []
                data.results.forEach(question => {
                    var thisQ = question.incorrect_answers.concat(question.correct_answer)
                    thisQ.sort(() => Math.random() - 0.5)
                    answers.push(thisQ)
                })
                
                setAnswers(answers)

            })

        setFirstGame(false)
        setGameRunning(true)
    }

    return (
        <div>
            {/* also potentially a score? */}

            {/* ask for difficulty and category? (choose 1 or all) */}
            {/* option for timer? */}

            {/* Set of 50 questions generated every time the initial 50 are answered */}


            {/* either when time runs out (if timer edition) and/or all 50 questions are answered */}

            {gameRunning ? 
            <GameRunning 
                questions={questions} 
                gameOver={gameOver} 
                seconds={timer}
                answers={answers}
            /> 
            : 
            <GameStart 
                gameStartFunction={gameStart} 
                firstGame={firstGame} 
                score={score}
            />
            }



        </div>
    )

}

    


export default Game