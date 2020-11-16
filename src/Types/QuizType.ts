import { type } from "os"

export type Questiontype = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}
export type Quiz = {
    question: string
    answere: string
    option: string[]
    correct_answer: string

}
export type Questionproptype = {
    question: string
    option: string[]
    callback: (e: React.FormEvent<EventTarget>, ans: string) => void
}