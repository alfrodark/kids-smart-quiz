import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quizUrl = '../../assets/questions.json'; // Path to your JSON file

  constructor(private http: HttpClient) {}

  getQuizData(): Observable<any> {
    return this.http.get(this.quizUrl);
  }
}
