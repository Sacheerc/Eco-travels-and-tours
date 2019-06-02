import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../services/question/question.service';
import { Question } from '../../models/question';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers:[QuestionService]
})
export class CustomersComponent implements OnInit {

  constructor(private questionService:QuestionService) { }

  ngOnInit() {
    this.questionService.getQuestionList().subscribe((res)=>{
      this.questionService.questions=res as Question[];
    });
  }

}
