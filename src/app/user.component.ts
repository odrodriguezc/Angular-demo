import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <h2>{{ firstName }} {{ lastName }}</h2>
    <p>{{ role }}</p>
  `,
  styles: [],
})
export class UserComponent {
  @Input()
  firstName: string = 'Ernesto';
  @Input()
  lastName: string = 'Guevara';
  @Input()
  role: string = 'Formateur';
}
