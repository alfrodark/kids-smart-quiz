import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuizService } from '../service/quiz.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {

  username : string="";
  quizData: any;
  totalQuestions!: number;
  correctAnswers: any = 0;
  timer: any;
  counter: number = 0;
  shuffledQuestions!: any[];

  timerSubscription!: Subscription;
  timeRemaining: number = 0;
  quizDuration: number = 200;
  remainingTime!: number;
  currentQuestionIndex: number = 0;
  incorrectAnswers: any = 0;
  quizEnded: boolean = false;
  unansweredQuestions: number = 0;
  totalPoints: number = 0;
  userAnswers: { [key: number]: string } = {};
  questionPoints: { [key: string]: number } = {};


  constructor(private quizService: QuizService) {}

  ngOnDestroy(): void {

    this.timerSubscription.unsubscribe();
  }

  ngOnInit() {

    this.username = localStorage.getItem("username")!;

    this.quizService.getQuizData().subscribe(data => {
      // this.quizData = data.questions;
      this.quizData = this.shuffleArray(data.questions);
      this.totalQuestions = this.quizData.length;
      this.initializeUserAnswers();
    });

    this.startQuizTimer();
  }

  initializeUserAnswers() {
    this.userAnswers = {};
    for (const question of this.quizData) {
      this.userAnswers[question.question] = "";
    }
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  startQuizTimer() {
    this.remainingTime = this.quizDuration;
    this.timerSubscription = timer(0, 1000).subscribe(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        this.endQuiz();
      }
    });
  }

  endQuiz() {
    this.timerSubscription.unsubscribe();
    this.calculateScore();
    this.quizEnded = true;
  }

   calculateScore() {

     this.correctAnswers = this.quizData.filter(
       (      question: { selectedAnswer: any; correctAnswer: any; }) => question.selectedAnswer === question.correctAnswer
     ).length;
     this.incorrectAnswers = this.quizData.filter(
      (      question: { selectedAnswer: any; correctAnswer: any; }) => question.selectedAnswer !== question.correctAnswer
    ).length;
    this.unansweredQuestions = this.quizData.filter(
      (      question: { selectedAnswer: any; correctAnswer: any; }) => question.selectedAnswer === null
    ).length;
     this.totalPoints = this.correctAnswers * 5 - this.incorrectAnswers * 5;

   }

  getProgressPercentage() {
    return ((this.quizDuration - this.remainingTime) / this.quizDuration) * 100;

  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.totalQuestions - 1) {
      this.currentQuestionIndex++;
    }
    this.calculateScore();
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }


}
