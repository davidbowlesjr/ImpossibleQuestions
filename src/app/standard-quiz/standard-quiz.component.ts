import { Component } from '@angular/core';
import { QuestionService } from '../service/question-service';
import { Answer, Question } from '../model/question-model';

@Component({
  selector: 'app-standard-quiz',
  templateUrl: './standard-quiz.component.html',
  styleUrls: ['./standard-quiz.component.css']
})
export class StandardQuizComponent {
  questionsView:Question[] = []
  totalNumOfQuestions = 0
  questionNum = 1
  numOfCorrectAnswers = 0
  isAnsered:number[] = []
  
  constructor(private questionService:QuestionService){
    this.questionsView = this.questionService.loadQuestions(10)
    this.totalNumOfQuestions = this.questionsView.length
    console.log(this.totalNumOfQuestions)
  }

  onSubmit(answer:Answer){
    let correctAnswer = this.questionService.compareAnswers(answer, this.questionsView[this.questionNum-1].answers)

    if(correctAnswer && this.numOfCorrectAnswers < this.totalNumOfQuestions){
      this.numOfCorrectAnswers = this.numOfCorrectAnswers+1
    }
    if(this.questionNum != this.totalNumOfQuestions+1 && !this.isAnsered.includes(this.questionNum)){
        this.isAnsered.push(this.questionNum)
        console.log('Questions Answered ',this.isAnsered)
        this.questionsView[this.questionNum-1].userAnswerId = answer.answerId
    }
  }

  nextQuestion(){
    this.questionNum = this.questionNum+1
  }

  previousQuestion(){
    this.questionNum = this.questionNum-1
  }
}
