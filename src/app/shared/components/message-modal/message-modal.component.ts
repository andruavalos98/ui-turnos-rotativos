import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Message } from './message';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css'],
})
export class MessageModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MessageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public message: Message
  ) {}

  ngOnInit(): void {
    if (!this.message.timeInScreen) {
      this.message.timeInScreen = 2000;
    }

    setTimeout(() => {
      this.dialogRef.close();
    }, this.message.timeInScreen);
  }
}
