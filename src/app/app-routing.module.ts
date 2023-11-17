import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [

  {path: '', redirectTo: 'welcome', pathMatch:"full"},
  {path: "welcome", component:WelcomeComponent},
  {path: "quiz", component: QuizComponent},
  {path: "results", component: ResultsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
