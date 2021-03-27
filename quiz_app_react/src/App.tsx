import React, {useState} from 'react';
import {fetchQuizQuestions} from './API';
// Import Question Card Component
import QuestionCard from './components/QuestionCard';

// Question Types
import {Difficulty, QuestionState} from './API'

// Answer Object
type AnswerObject = {

  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;

}

// CONSTANTS
const TOTAL_QUESTIONS = 10;

// Main component of the app
const App = () => {

  // Loading State
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number,setNumber] = useState(0);
  const [userAnswers,setUserAnswers] = useState<AnswerObject[]>([]);
  const [score,setScore] = useState(0);
  const [gameOver,setGameOver] = useState(true);

  // Show Questions on Console - OPTIONAL
  // console.log(questions)

  // Trivia Fetch Questions
  const startTrivia = async () =>{

    // Start Button is clicked
      // Restart
    setLoading(true);
    setGameOver(false); 
    setScore(0);
    setUserAnswers([]);
    setNumber(0);

    // Get New Questions
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.MEDIUM
    );

    // Hold Questions
    setQuestions(newQuestions); 

    // End Loading
    setLoading(false);

  }

  // Check the answer
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => { 

    if(!gameOver){
      // users answer
      const answer = e.currentTarget.value;

      // check if it is correct
      const correct = questions[number].correct_answer === answer;

      // if correct
      if (correct) setScore(prev => prev+ 1);

      // Save the answer on the arraylist
      const answerObject = {

        question : questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer

      };

      setUserAnswers((prev) => [...prev , answerObject ]);

    }

  }

  // Next Question
  const nextQuestion = () => {

    // move on to the next question if it is not the last qusetion
    const nextQusetion = number + 1;

    // if it is last question
    if (nextQusetion === TOTAL_QUESTIONS){
      // game is over
      setGameOver(true);
    }else{
      setNumber(nextQusetion);
    }


  }

  return (
    <div className="App">
      
      <h1> A-MEAN YKS Soru Bankası </h1>

      {// Show Start button only starting or finising all questions
      gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}> Başla </button>
      ) : null}

      {!gameOver ? (<p className="score"> Doğru Sayısı:  </p>) : null}
      
      {loading && (<p> Sorular Yükleniyor...  </p>)}

      {(!loading && !gameOver) ? (
      <QuestionCard

        questionNr = {number + 1}
        totalQuestions = {TOTAL_QUESTIONS}
        question = {questions[number].question}
        answers = {questions[number].answers}
        userAnswer = {userAnswers ? userAnswers[number] : undefined}
        callback = {checkAnswer}

      />
      ) : null}

      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS -1 ? (
        <button className="next" onClick={nextQuestion}> Sonraki Soru </button>
      ) : null}
      {!gameOver && !loading && userAnswers.length === number + 1 && number === TOTAL_QUESTIONS -1 ? (
        <button className="next" onClick={nextQuestion}> Testi Bitir </button>
      ) : null}
    </div>
  );
}

export default App;
