import React from 'react';
import styled from "styled-components"


const QuizGenerator = (props) => {
  const [showAnswer, setShowAnswer] = React.useState(false)

  return(
    <>
      <p style={{margin: "50px 0 10px"}}>
        { showAnswer ?
          props.quiz.replace(/}/gi, "/").replace(/{/gi, "/!").split('/').map((value)=>{
          if (value.charAt() === "!") {
            return <span style={{color: "inherit"}}>{value.slice(1)}</span>
          }
          return value
          })

          :

          props.quiz.replace(/}/gi, "/").replace(/{/gi, "/!").split('/').map((value)=>{
          if (value.charAt() === "!") {
            return <span style={{color: "transparent"}}>{value.slice(1)}</span>
          }
          return value
          })
        }
      </p>
      <button onClick={()=>{setShowAnswer(!showAnswer)}}>{showAnswer ? "答えを隠す" : "答えを見る"}</button>
    </>
  )
}


export default QuizGenerator;
