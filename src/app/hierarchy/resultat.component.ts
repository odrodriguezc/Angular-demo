import { Component, OnInit, Input } from '@angular/core';
import { MyService } from './service';

@Component({
  selector: 'app-resultat',
  template: ` <h4>composant RESULTAT</h4>
    <span>{{ resultat }}</span>`,
  styles: [],
})
export class ResultatComponent implements OnInit {
  @Input()
  public resultat: number = 5;

  constructor(private service: MyService) {
    console.log('resultat', this.service);
  }

  ngOnInit(): void {}
}
