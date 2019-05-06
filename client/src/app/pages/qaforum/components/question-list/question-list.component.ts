import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {QuestionService} from '../../../../services/questions/question.service';
import { Question } from '../../../../shared/models/question.model';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  providers:[QuestionService]
})
export class QuestionListComponent implements OnInit {
  @Input() isLoggedIn='false';
  currentuser:any;

  constructor(private questionService:QuestionService){}
  
  answerForm = new FormGroup({
    answer:new FormControl('')
  });
  
  ngOnInit() {
    this.refreshQuestionList();
    this.currentuser=JSON.parse(localStorage.getItem('user'));
  }

  refreshQuestionList(){
    this.questionService.getQuestionList().subscribe((res)=>{
      this.questionService.questions=res as Question[];
    });
  }

  onSubmit(id: string){
 this.questionService.postAnswer(id, this.answerForm.value).subscribe((res)=>{
  
});
    this.answerForm.controls['answer'].setValue('');
    alert("Answer posted");
    setTimeout(()=>{
      this.refreshQuestionList();
      
    },400);
    
  }

  onDelete(id:String)
  {
    this.questionService.deleteQuestion(id).subscribe((res)=>{
      this.refreshQuestionList();
    });
  }

  onAnswerDelete(id:String)
  {
    this.questionService.deleteAnswer(id).subscribe((res)=>{
      this.refreshQuestionList();
    });
  }

}
