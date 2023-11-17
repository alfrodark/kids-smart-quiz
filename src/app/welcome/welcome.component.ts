import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  myForm!: FormGroup;


  @ViewChild('username') nameKey!: ElementRef;
  // @ViewChild('username', { static: true }) username!: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      myInput: new FormControl('', Validators.required)
    });
  }

  startQuiz(){

    const usernameValue = this.nameKey.nativeElement.value;

    localStorage.setItem("username", this.nameKey.nativeElement.value);
    // localStorage.setItem("username", usernameValue);

    let fieldInput: string = this.nameKey.nativeElement.value;
    // let fieldInput: string = usernameValue;

    let myVar = document.getElementById("thinkTank");
    let myVar2 = document.getElementById("errorMsg");

    if(fieldInput== "" && myVar != null && myVar2 != null){

        myVar.style.border = 'red solid 1px';
        myVar2.style.display = 'block';

    }
    else {
      this.router.navigate(['/quiz']);
    }

  }









}
