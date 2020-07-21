import { Component, Input, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <h2>Hello {{ firstName }}</h2>
    <button (click)="alerte()">Alerte</button>
    <input [(ngModel)]="firstName" />
    <hr />
  `,
  styles: [],
})
export class DemoComponent {
  @Input()
  firstName = 'Marco Aurelio';

  alerte() {
    this.firstName = 'xyz';
  }

  handleChange(value: string) {
    //const value = (event.target as HTMLInputElement).value;
    this.firstName = value;
  }
}
