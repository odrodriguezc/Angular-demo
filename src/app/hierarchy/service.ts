import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  id: number;

  constructor() {
    this.id = Math.random();
  }
}
