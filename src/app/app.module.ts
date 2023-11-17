import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './results/results.component';
import { ChangeBgDirective } from './change-bg.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageBoxComponent } from './message-box/message-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertComponent } from './alert/alert.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuizComponent,
    HeaderComponent,
    ResultsComponent,
    ChangeBgDirective,
    MessageBoxComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
