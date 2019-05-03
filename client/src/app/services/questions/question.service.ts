import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

import { Question } from '../../shared/models/question.model';
import { Answer } from '../../shared/models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  selectedQuestion: Question;
  questions: Question[];

  readonly baseURL = "http://localhost:3000/qaforum";

  constructor(private http:HttpClient) { }

  postQuestion(qstn: Question){
    return this.http.post(this.baseURL,qstn);
  }

  postAnswer(ans: Answer){
    return this.http.post(this.baseURL+'/${ans.questionID}',ans);
  }
  getQuestionList(){
    return this.http.get(this.baseURL);
  }
    
  
}
