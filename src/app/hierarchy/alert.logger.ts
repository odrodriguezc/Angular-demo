import { Logger } from './logger';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertLogger extends Logger {
  log(message: string) {
    window.alert(message);
  }
}
