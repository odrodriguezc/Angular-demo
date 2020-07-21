import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user2',
  template: `
    <h2>{{ userDetails.firstName }} {{ userDetails.lastName }}</h2>
    <p>Role: {{ userDetails.role }}</p>
  `,
  styles: [],
})
export class User2Component {
  @Input()
  userDetails: UserDetails;
}

interface UserDetails {
  firstName: string;
  lastName: string;
  role: string;
}
