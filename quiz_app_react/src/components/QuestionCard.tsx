import React from 'react';

import {AnswerObject} from '../App';

// Main Config - Template
type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void ;
    userAnswer: AnswerObject | undefined;
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
                <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}} />
                </button>
            </div>
        ))}
    </div>
    
</div>
)

export default QuestionCard;