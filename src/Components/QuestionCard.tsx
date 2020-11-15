import React from "react";
import { Questionproptype } from "./../Types/QuizType"
const QuestionCard: React.FC<Questionproptype> = ({
    question,
    option,callback
}
) => {
    return (
        <div className="question-container">
            <div className="question">
                {question}
            </div>
            <form onSubmit={callback}>
                {
                    option.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input
                                        type="radio"
                                        name="opt"
                                        value={opt}
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