import React, {useState} from 'react'

const GameStart = ({gameStartFunction, firstGame, score}) => {

    const [difficulty, setDifficulty] = useState("")
    const [category, setCategory] = useState("")
    const [numQuestions, setNumQuestions] = useState(25)
    const [timer, setTimer] = useState('');
    const [playHit, setPlayHit] = useState(false)

    const handleChange = event => {
        const result = event.target.value.replace(/\D/g, '');
        setTimer(result);
    };

    function hitButton () {
        setPlayHit(true)
        gameStartFunction(numQuestions, difficulty, category, timer)
    }

    var placeHolderText = `Default: ${numQuestions * 10}`

    return (
        <div>

            {/* maybe have some funny results per score */}
            {firstGame ? 

                <h2> Welcome to Yam! To start, select from the following options and hit play! </h2> 
                : 
                <h2> Game Over! Play again? 
                    <br></br>
                    Your score was {score}!
                </h2> 
            
            }

            {/* create a drop down for difficulty */}
            <select onChange={(e) => setDifficulty(e.target.value)}>
                <option value="">Difficulty</option>
                <option value="">ALL!!</option>
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
            </select>
            <br/>
            {/* create a drop down for category */}
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Category</option>
                <option value="">ALL!!</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals & Theatres</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science & Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">Entertainment: Japanese Anime & Manga</option>
                <option value="32">Entertainment: Cartoon & Animations</option>
            </select>
            <br/>
            {/* create a slider for number of questions from 25 to 50 */}
            Number of Questions?: 
            <input type="range" min="25" max="50" value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)}></input>
            {numQuestions}
            <br/>
            Time Wanted (Seconds)?:  

            <input
            type="text"
            placeholder= {placeHolderText}
            value={timer}
            onChange={handleChange}
            />
            <br/>
            <br/>

            {/* <button onClick={() => gameStartFunction(numQuestions, difficulty, category, timer)}>Play</button> */}
            <button onClick={hitButton}>Play</button>
            {playHit ? <h2>Loading...</h2> : null}

        </div>
    )
}

export default GameStart