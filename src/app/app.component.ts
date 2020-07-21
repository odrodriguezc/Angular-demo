import { Component, ElementRef, ViewChild } from '@angular/core';
import { MyService } from './hierarchy/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // showUsers = false;

  // users = [
  //   { firstName: 'Lina', lastName: 'Linares', role: 'Admin' },
  //   { firstName: 'Laura', lastName: 'Look', role: 'Juriste' },
  //   { firstName: 'Louise', lastName: 'Lan', role: 'Juriste Junior' },
  // ];

  contenance = 30;
  showFrigo = true;
  //le decorateur ViewChild permet de connecter la propieté de la clase avec la reference du template
  @ViewChild('maDiv')
  div: ElementRef<HTMLDivElement>;

  constructor(private service: MyService) {}

  ngOnInit() {
    //l'element de la reference div n'est pa encore disponible
    console.log('init APP: ', this.div);
  }

  ngAfterViewInit() {
    //ici on a acces à l'element
    console.log('vue initialisée: ', this.div);
  }

  handleFrigoVide(message) {
    console.log(message.message);
    //console.log(message);
  }

  modifierContenance() {
    this.contenance = 10;
  }

  modifierCouleur(color: string) {
    let randColor =
      'rgb(' +
      Math.floor(Math.random() * 255) +
      ',' +
      Math.floor(Math.random() * 255) +
      ',' +
      Math.floor(Math.random() * 255) +
      ')';
    this.div.nativeElement.style.color = color;
  }
}
