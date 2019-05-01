import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import {QuestionService} from '../../../../services/questions/question.service';
import { Question } from '../../../../shared/models/question.model';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  providers:[QuestionService]
})
export class QuestionListComponent implements OnInit {

  constructor(private questionService:QuestionService){}
  
  ngOnInit() {
    this.refreshQuestionList();
  }

  refreshQuestionList(){
    this.questionService.getQuestionList().subscribe((res)=>{
      this.questionService.questions=res as Question[];
    });
  }
  onSubmit(form:NgForm){
    alert("success");
    this.questionService.postAnswer(form.value).subscribe((res)=>{
    });
  }

}
