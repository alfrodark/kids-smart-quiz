import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>{{ data.message }}</mat-dialog-content>
    <mat-dialog-actions align="start">
      <button mat-button [mat-dialog-close]="true">OK</button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
