import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './Services/quiz_service'
import { Quiz} from "./Types/QuizType"
import QuestionCard from "./Components/QuestionCard"
function App() {
  let [quiz , setquiz] = useState<Quiz[]>([])
  useEffect(() => {
    async function fetchData() {
      const question:Quiz[] = await getQuizDetails(5, "hard");
      console.log(question);
      setquiz(question);
    }
    fetchData();

  }, [])
  if(!quiz.length)
  return<h3>Loading....</h3>
  return (
    <div className="App">
      <h1>Welcome To Quiz </h1>
      <QuestionCard 
      option  ={quiz[0].option}
      question = {quiz[0].question}
      />

    </div>
  );
}

export default App;
