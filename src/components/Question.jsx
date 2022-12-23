import React from 'react'

const Question = ({question, index, checkanswer}) => {
  return (
    <div>
        
        <h3>{index + 1}. {decodeURIComponent(question.question)}</h3>
                    <h4>{decodeURIComponent(question.correct_answer)}</h4>
                    {question.incorrect_answers.map((answer, index) => {
                        return (
                            <h4 key={index}>{decodeURIComponent(answer)}</h4>
                        )
                })}
    </div>
  )
}

export default Question