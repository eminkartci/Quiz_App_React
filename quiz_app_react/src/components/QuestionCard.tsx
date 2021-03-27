import React from 'react';


// Main Config - Template
type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}


// Declare the Config and Temp by React FC 
const QuestionCard: React.FC<Props>= ({ question ,
                                        answers, 
                                        callback, 
                                        userAnswer , 
                                        questionNr, 
                                        totalQuestions
}) => (
<div>
    
    <p className="number" >Soru: {questionNr} / {totalQuestions}</p>

    <p dangerouslySetInnerHTML={{__html: question}}/>

    <div>
        {answers.map(answer => (
            <div key={answer}>
                <button disabled={userAnswer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}} />
                </button>
            </div>
        ))}
    </div>
    
</div>
)

export default QuestionCard;