import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './Services/quiz_service'
import { Quiz } from "./Types/QuizType"
import QuestionCard from "./Components/QuestionCard"
function App() {
  let [quiz, setquiz] = useState<Quiz[]>([])
  let [currentstep, setCurrentStep] = useState(0)
  useEffect(() => {
    async function fetchData() {
      const question: Quiz[] = await getQuizDetails(5, "hard");
      console.log(question);
      setquiz(question);
    }
    fetchData();

  }, [])
  const handleSubmit = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if(currentstep !==quiz.length-1)
      setCurrentStep(++currentstep)
    else alert("Quiz Completed")
  }
  if (!quiz.length)
    return <h3>Loading....</h3>

  return (
    <div className="App">
      <h1>Welcome To Quiz </h1>
      <QuestionCard
        option={quiz[currentstep].option}
        question={quiz[currentstep].question}
        callback={handleSubmit}
      />

    </div>
  );
}

export default App;
