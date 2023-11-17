export type Question = {
    id:number,
    questionString:string,
    answers:Answer[],
    userAnswerId:number
}

export type Answer = {
    answerId:number,
    answerString:string,
    answerPercentage:number
}