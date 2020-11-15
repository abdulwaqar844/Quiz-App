import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './Services/quiz_service'
import { Quiz} from "./Types/QuizType"
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
  return (
    <div className="App">
      <h1>Welcome To Quiz </h1>

    </div>
  );
}

export default App;
