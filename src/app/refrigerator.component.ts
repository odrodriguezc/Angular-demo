import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-refrigerator',
  template: `
    <h2>Frigo</h2>
    <ul>
      <li>Temperature: {{ temperature }}°</li>
      <li>contenance: {{ contenance }}L</li>
      <li>
        couleur{{ couleur[0].toUpperCase() + couleur.slice(1).toLowerCase() }}
      </li>
    </ul>

    <h3>Contenu:</h3>
    <ng-content select=".content"></ng-content>

    <h3>Liste de courses:</h3>
    <ng-content select=".liste"></ng-content>

    <button (click)="handleClick()">frigo vide</button>
  `,
  styles: [],
})
export class RefrigeratorComponent
  implements
    OnInit,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy {
  @Input()
  temperature: number;
  @Input()
  contenance: number;
  @Input()
  couleur: string;

  @Output()
  onFrigoVide = new EventEmitter();

  //le decorateur COntentChild fait la meme chose que le @ViewChild mais lorsque la reference se trouve dans le ng-content
  @ContentChild('liste')
  listeRef: ElementRef<HTMLDivElement>;

  constructor() {
    console.log('instanciation!');
    console.log('---------------------');
  }

  ngOnChanges(infos) {
    console.log('OnChanges', infos);
  }

  ngOnInit(): void {
    console.log('Initialization OnInit');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit', this.listeRef);
    this.listeRef.nativeElement.insertAdjacentHTML('beforeend', '<hr>');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit', this.listeRef);
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }

  handleClick() {
    this.onFrigoVide.emit({
      message: 'attention le frigo es vide --frigo component',
    });
  }
}
