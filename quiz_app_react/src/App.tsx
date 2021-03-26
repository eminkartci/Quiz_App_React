import React, {useState} from 'react';

// Import Question Card Component
import QuestionCard from './components/QuestionCard';

// CONSTANTS
const TOTAL_QUESTIONS = 10;

// Main component of the app
const App = () => {

  // Loading State
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number,setnumber] = useState(0);
  const [userAnswers,setUserAnswers] = useState([]);
  const [score,setScore] = useState(0);
  const [gameOver,setGameOver] = useState(true);

  // Trivia Fetch Questions
  const startTrivia = async () =>{

  }

  // Check the answer
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  // Next Question
  const nextQuestion = () => {

  }

  return (
    <div className="App">
      
      <h1> A-MEAN YKS Soru Bankası </h1>

      <button className="start" onClick={startTrivia}> Başla </button>

      <p className="score"> Doğru Sayısı:  </p>
      <p> Sorular Yükleniyor...  </p>

      <QuestionCard

        questionNr = {number + 1}
        totalQuestions = {TOTAL_QUESTIONS}
        question = {questions[number].question}
        answers = {questions[number].answers}
        userAnswer = {userAnswers ? userAnswers[number] : undefined}
        callback = {checkAnswer}
        
      />

      <button className="next" onClick={nextQuestion}> Sonraki Soru </button>
    </div>
  );
}

export default App;
