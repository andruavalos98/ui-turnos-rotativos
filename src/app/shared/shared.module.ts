import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MessageModalComponent } from './components/message-modal/message-modal.component';

@NgModule({
  declarations: [MessageModalComponent],
  imports: [CommonModule, ReactiveFormsModule, MatCardModule],
  exports: [CommonModule, ReactiveFormsModule, MessageModalComponent],
})
export class SharedModule {}
