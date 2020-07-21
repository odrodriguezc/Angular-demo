import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MyService } from './service';
import { Logger } from './logger';

@Component({
  selector: 'app-calculateur',
  template: ` <h3>composant CALCULATEUR:</h3>
    <input type="number" (input)="nombre1 = $event.target.value" />
    <input type="number" (input)="nombre2 = $event.target.value" />
    <button (click)="emettreEvenement()">+++</button>`,
  styles: [],
})
export class CalculateurComponent implements OnInit {
  public nombre1: number;
  public nombre2: number;

  @Output()
  public aditionDemandee = new EventEmitter();

  public emettreEvenement() {
    console.log(this.nombre1, this.nombre2);

    this.aditionDemandee.emit({
      nombre1: +this.nombre1,
      nombre2: +this.nombre2,
    });
  }

  constructor(private service: MyService, private logger: Logger) {
    console.log('calculateur', this.service);
    this.logger.log('Message du CALCULATEUR');
  }

  ngOnInit(): void {}
}
