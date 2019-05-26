import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  readonly baseURL = "http://localhost:3000/qaforum";

  constructor(private http:HttpClient) { }
  questions: Question[]; 
  getQuestionList(){return this.http.get(this.baseURL);}
}
