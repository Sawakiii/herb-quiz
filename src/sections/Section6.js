import React from "react"
import QuizGenerator from "../QuizGenerator"

const Section6 = (props) =>{
    const quizesOne = [
        
    ]
    const quizesTwo = [
        
    ]
    const quizesThree = [
        
    ]
    const quizesFour = [
        
    ]

    return (
        <>
            <h1>ここは第章についてです。</h1>
            <hr></hr>
            <h2 style={{margin: "30px 0"}}></h2>
            {
                quizesOne.map((quiz)=>(
                    <QuizGenerator quiz={quiz}></QuizGenerator>
                ))
            }

        </>
    )
}


export default Section6