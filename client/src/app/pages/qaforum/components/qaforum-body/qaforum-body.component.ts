import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import {QuestionService} from '../../../../services/questions/question.service';


@Component({
  selector: 'app-qaforum-body',
  templateUrl: './qaforum-body.component.html',
  styleUrls: ['./qaforum-body.component.css'],
  providers:[QuestionService]
})
export class QaforumBodyComponent implements OnInit {
  
  constructor(private questionService:QuestionService){}
  @Output() toggleParent = new EventEmitter<string>();
  @Input() isLoggedIn='false';
  currentuser:any;
  
  ngOnInit() {
    this.resetForm();
    this.currentuser=JSON.parse(localStorage.getItem('user'));
  }
  resetForm(form? : NgForm)
  {
    if(form)
    form.reset();
    this.questionService.selectedQuestion={
      _id:"",
      title:"",
      description:"",
      author:{_id:"",username:""},
      answers:[],
      date:null
    }
  }

  onSubmit(form:NgForm){
    alert("success");
    console.log(this.currentuser);
    this.questionService.postQuestion(form.value,this.currentuser).subscribe((res)=>{
    });
    this.resetForm(form);
    this.toggleParent.next('ok');
  }
  
}
