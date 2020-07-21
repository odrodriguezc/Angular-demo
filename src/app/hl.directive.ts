import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[highlight]',
  exportAs: 'highLight',
})
export class HLDirective {
  @Input('highlight')
  @HostBinding('style.backgroundColor')
  bgColor = 'red';

  @HostBinding('style.color')
  color: string;

  @HostBinding('style.fontWeight')
  graisse = 'bold';

  constructor(private element: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.bgColor = this.bgColor ? this.bgColor : 'red';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.bgColor;
    this.element.nativeElement.style.borderRadius = '10px';

    this.color = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'transparent';
    this.color = 'black';
  }
}
