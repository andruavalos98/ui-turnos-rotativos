import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeFormatter {
  // Format a time to hh:mm:ss
  static formatTime(time: string) {
    const timeSplitted = time.split(':');

    if (timeSplitted.length < 3) {
      return [...timeSplitted, '00'].join(':');
    }

    return timeSplitted.join(':');
  }
}
