import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import {QuestionService} from '../../../../services/questions/question.service';
import { PopupModalsService } from '../../../../services/popup-modals/popup-modals.service';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-qaforum-body',
  templateUrl: './qaforum-body.component.html',
  styleUrls: ['./qaforum-body.component.css'],
  providers:[QuestionService]
})
export class QaforumBodyComponent implements OnInit {
  
  constructor(public questionService:QuestionService,
    private popupService: PopupModalsService,
    public dialog: MatDialog,
    private toastrService: ToastrService){}

  @Output() hideParent = new EventEmitter<string>();
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
    var title="Are you sure?"
    var descr="Do you want to post your question?"

    const dialogRef = this.popupService.confimationModal(title,descr,"Post")
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.toastrService.success('Your question has been added successfully','Success',{timeOut:2000,positionClass:'toast-center-center'});
        this.questionService.postQuestion(form.value,this.currentuser).subscribe((res)=>{
            });
        this.resetForm(form);
        this.hideParent.emit();
      } else {
        console.log(false)
      }
    });
  }
  clickSubmit(){}
  
}
