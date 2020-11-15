import React from "react";
import { Questionproptype } from "./../Types/QuizType"
const QuestionCard: React.FC<Questionproptype> = ({
    question,
    option
}
) => {
    return (
        <div className="question-container">
            <div className="question">
                {question}
            </div>
            <form>
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