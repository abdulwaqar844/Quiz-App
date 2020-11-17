import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './Services/quiz_service'
import { Quiz } from "./Types/QuizType"
import QuestionCard from "./Components/QuestionCard"
function App() {
  let [quiz, setquiz] = useState<Quiz[]>([]);
  let [score, setScore] = useState(0);
  let [currentstep, setCurrentStep] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const question: Quiz[] = await getQuizDetails(10, "hard");
      setquiz(question);
    }
    fetchData();

  }, [])
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const currentQuestion: Quiz = quiz[currentstep];

    if (userAns === currentQuestion.correct_answer) {
      setScore(++score)
    }
    if (currentstep !== quiz.length - 1) {
      setCurrentStep(++currentstep)

    }
    else {
      alert(" Your Score is " + score + " Out of " + quiz.length);
      setCurrentStep(0);
      setScore(0)
    }

  }
  if (!quiz.length)
    return <h3>Loading....</h3>

  return (
    <div className="App">
      <h1>Welcome To Quiz </h1>
  <h1>Your Score is   {score}  Out of  {quiz.length}</h1>
      <QuestionCard
        option={quiz[currentstep].option}
        question={quiz[currentstep].question}
        callback={handleSubmit}
      />

    </div>
  );
}

export default App;
