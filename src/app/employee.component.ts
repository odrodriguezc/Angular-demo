import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  template: `
    <hr />
    <h2>{{ firstName }} {{ lastName }}</h2>
    <h4>Description:</h4>
    <ng-content select=".description"></ng-content>
    <h4>Citation:</h4>
    <ng-content select=".citation"></ng-content>
  `,
  styles: [],
})
export class EmployeeComponent implements OnInit {
  @Input()
  firstName: string;
  @Input()
  lastName: string;

  constructor() {}

  ngOnInit(): void {}
}
