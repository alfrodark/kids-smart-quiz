import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageBoxComponent } from './message-box.component';


@Injectable({
  providedIn: 'root'
})
export class MessageBoxGuard implements CanActivate {

  constructor(private dialog: MatDialog, private router: Router) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      const dialogRef = this.dialog.open(MessageBoxComponent, {
        disableClose: true, // Prevent closing the dialog by clicking on the backdrop
        width: '500px',
        data: { title: 'Time Is Up', message: 'Close.' }
      });

      dialogRef.afterClosed().subscribe(() => {
        console.log('The message box was closed');
        resolve(true);
      });
    });
  }
}
