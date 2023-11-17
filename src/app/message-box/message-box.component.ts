import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent {
  constructor(
    public dialogRef: MatDialogRef<MessageBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeMessageBox(): void {
    this.dialogRef.close();
  }

}
