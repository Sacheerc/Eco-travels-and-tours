import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {QuestionService} from '../../../../services/questions/question.service';
import { Question } from '../../../../shared/models/question.model';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { PopupModalsService } from '../../../../services/popup-modals/popup-modals.service';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  providers:[QuestionService]
})
export class QuestionListComponent implements OnInit {
  @Input() isLoggedIn='false';
  currentuser:any;
  constructor(private questionService:QuestionService,
    private popupService: PopupModalsService,
    public dialog: MatDialog,
    private toastrService: ToastrService
    ){}
  
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

  filterQuestionList(keyword:any){
    this.questionService.getFilteredQuestionList(keyword).subscribe((res)=>{
      this.questionService.questions=res as Question[];
      if(Object.keys(res).length==0)
      {this.toastrService.error(Object.keys(res).length+' results found','',{timeOut:1000,positionClass:'toast-center-center'});}
      else if(Object.keys(res).length==1)
      {this.toastrService.success(Object.keys(res).length+' result found','',{timeOut:1000,positionClass:'toast-center-center'});}
      else
      {this.toastrService.success(Object.keys(res).length+' results found','',{timeOut:1000,positionClass:'toast-center-center'});}
    });
  }

  onSubmit(id: string){
    var l=this.answerForm.value.toString().length;
    
    if(l!=0){
      this.questionService.postAnswer(id, this.answerForm.value,this.currentuser).subscribe((res)=>{});
      this.toastrService.success('Answer added!','Success',{timeOut:2000,positionClass:'toast-center-center'});
      
      this.answerForm.controls['answer'].setValue('');
      setTimeout(()=>{
        this.refreshQuestionList();
      },400);
    }
    else
    {
    this.toastrService.error('Enter something before you post!','Empty Answer',{timeOut:2000,positionClass:'toast-center-center'});
      
    }
  }

  onDelete(id:String)
  {
    var title="Are you sure?"
    var descr="Do you want to delete your question?"

    const dialogRef = this.popupService.confimationModal(title,descr,"Delete")
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.toastrService.success('Post deleted!','Success',{timeOut:2000,positionClass:'toast-center-center'});
        this.questionService.deleteQuestion(id).subscribe((res)=>{
          this.refreshQuestionList();
        });
      } else {
        console.log(false)
      }
    });
  }

  onAnswerDelete(id:String)
  {
    var title="Are you sure?"
    var descr="Do you want to delete your answer?"

    const dialogRef = this.popupService.confimationModal(title,descr,"Delete")
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.toastrService.success('Answer deleted!','Success',{timeOut:2000,positionClass:'toast-center-center'});
      
        this.questionService.deleteAnswer(id).subscribe((res)=>{
          this.refreshQuestionList();
        });
      } else {
        console.log(false)
      }
    });
  }

}
