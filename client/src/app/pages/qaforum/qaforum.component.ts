import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { textChangeRangeIsUnchanged } from 'typescript';
import { filter } from 'rxjs/operators';
import { QuestionListComponent } from './components/question-list/question-list.component';


@Component({
  selector: 'app-qaforum',
  templateUrl: './qaforum.component.html',
  styleUrls: ['./qaforum.component.css']
})
export class QaforumComponent implements OnInit {
  public isOn:boolean=false;
  keyword='';
  @Input() isLoggedIn='false';
  @ViewChild('filter') filter:QuestionListComponent;
  currentuser:any;
  constructor() { }

  ngOnInit() {
    this.currentuser=JSON.parse(localStorage.getItem('user'))
  }

  toggleOn(){
    this.isOn= !this.isOn;
    this.filter.refreshQuestionList();
  }

  search(){
    if(this.keyword.length==0)
    {
      this.filter.refreshQuestionList();
    }
    else{
      this.filter.filterQuestionList(this.keyword);
    }
     }

  onKey(event: any){
    this.keyword=event.target.value;
  }

}
