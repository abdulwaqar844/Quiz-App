import React, { useState } from "react";
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
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectAns)}>
                {
                    option.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
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
                <input type="submit" />
            </form>
        </div>

    );
}
export default QuestionCard; 