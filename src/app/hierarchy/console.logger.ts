import { Logger } from './logger';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsoleLogger extends Logger {
  log(message: string) {
    console.log(message);
  }
}
