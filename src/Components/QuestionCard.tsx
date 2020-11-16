import React, { useState } from "react";
import './../App.css';
import { Questionproptype } from "./../Types/QuizType"
const QuestionCard: React.FC<Questionproptype> = ({
    question,
    option,callback
}
) => {
    let [selectAns ,setSelectAns]=useState("");
    const handleSelection=(e:any)=>
    setSelectAns(e.target.value)
    return (
        <div className="question-container">
            <div className="question">
                {question}
            </div>
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectAns)} className="question-form" >
               
                {

                    option.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label className="radio">
                                    <input
                                        type="radio"
                                        name="opt"
                                        required
                                        value={opt}
                                        checked={selectAns===opt}
                                        onChange={handleSelection}
                                    />
                                    {opt}
                                </label>
                            </div>

                        )
                    }

                    )}
                <input className="submit" type="submit" />
            </form>
        </div>

    );
}
export default QuestionCard; 