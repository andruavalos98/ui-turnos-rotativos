import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateFormatter {
  // Add a 0 if the number has only one digit
  static padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  // Format a Date to dd/mm/yyyy
  static formatDate(date: Date) {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }
}
