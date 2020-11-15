import { Questiontype, Quiz } from "./../Types/QuizType"
const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const getQuizDetails = async (totalQuiz: number, level: string): Promise<Quiz[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuiz}&category=9&difficulty=${level}&type=multiple`)
    let { results } = await res.json();
    const quiz = results.map((questionObj: Questiontype) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer)),
        }
    });
    return quiz;
}