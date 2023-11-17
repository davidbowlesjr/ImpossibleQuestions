import { Injectable } from '@angular/core';
import { Answer, Question } from '../model/question-model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
    private _questions: Question[] = [{
      id:1,
      questionString:"How many holes in a straw?",
      answers:[{
        answerId: 1,
        answerString:"0",
        answerPercentage:.40
      },{
        answerId: 2,
        answerString:"1",
        answerPercentage:.20
      },{
        answerId: 3,
        answerString:"2",
        answerPercentage:.30
      },{
        answerId: 4,
        answerString:"3",
        answerPercentage:.10
      }],
      userAnswerId:0
    },
    {
      id:2,
      questionString:"Is a hotdog a sandwich?",
      answers:[{
        answerId: 1,
        answerString:"Yes",
        answerPercentage:.60
      },{
        answerId: 2,
        answerString:"No",
        answerPercentage:.40
      }],
      userAnswerId:0
    }

  ]

  constructor() { }

  loadQuestions(numOfQuestions:number):any {
    return this._questions
  }

  removeQuestion(index:number){
    this._questions.splice(index)
  }

  compareAnswers(answer:Answer, answers:Answer[]):boolean{
    let largestPercentage = 0
    for(let a of answers){
      if(largestPercentage < a.answerPercentage ){
        largestPercentage = a.answerPercentage
      }
    }
    if(largestPercentage == answer.answerPercentage){
      return true
    }
    else{
      return false
    }
  }

}