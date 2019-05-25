import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

import { Question } from '../../shared/models/question.model';
import { Answer } from '../../shared/models/answer.model';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  selectedAnswer: Answer;
  selectedQuestion: Question;
  questions: Question[];

  readonly baseURL = environment.appUrl+"/qaforum";

  constructor(private http:HttpClient) { }

  postQuestion(qstn: Question, currentuser:any){
    return this.http.post(this.baseURL,[qstn,currentuser]);
  }

  postAnswer(id: String, answer: String, currentuser:any){
    return this.http.post(this.baseURL+"/"+id,[answer,currentuser]);
  }
  getQuestionList(){
    return this.http.get(this.baseURL);
  }
    
  getFilteredQuestionList(keyword:any){
    return this.http.get(this.baseURL+'/filter/'+keyword);
  }
  deleteQuestion(id:String)
  {
    return this.http.delete(this.baseURL+"/"+id);
  }

  deleteAnswer(id:String)
  {
    return this.http.delete(this.baseURL+"/answer/"+id);
  }
  
}
