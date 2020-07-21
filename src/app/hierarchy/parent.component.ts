import { Component, OnInit, Inject } from '@angular/core';
import { MyService } from './service';
import { Logger } from './logger';
import { ConsoleLogger } from './console.logger';
import { AlertLogger } from './alert.logger';
import { URL_TOKEN } from './url.token';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Composant PARENT</h2>
    <app-calculateur
      (aditionDemandee)="handleBoutonClique($event)"
    ></app-calculateur>
    <app-resultat [resultat]="resultat"></app-resultat>
  `,
  styles: [],
  providers: [MyService],
})
export class ParentComponent implements OnInit {
  public prenom = 'Nabuchodonosor';
  public resultat = 0;

  public handleBoutonClique(data) {
    this.resultat = data.nombre1 + data.nombre2;
  }

  constructor(
    private service: MyService,
    private logger: Logger,
    @Inject(URL_TOKEN) url: string
  ) {
    console.log('parent', this.service);
    this.logger.log('Message du PARENT');
    console.log(url);
  }

  ngOnInit(): void {}
}
