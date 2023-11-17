import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionService } from '../service/question-service';
import { Answer, Question } from '../model/question-model';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  constructor(private questionService:QuestionService){}

  @Input()
  question!: Question

  @Input()
  isAnswered:boolean = false

  @Output() 
  userAnswer:EventEmitter<Answer> = new EventEmitter<Answer>();

  onAnswer(answer:Answer){
    console.log("EMIT")
    this.userAnswer.emit(
      answer
    )
  }
}
