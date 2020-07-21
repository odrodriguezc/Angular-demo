import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: number, symbol: string = '€'): string {
    return (
      value.toLocaleString('fr-FR', {
        minimumFractionDigits: 2,
        // currency: 'EUR',
        // currencyDisplay: 'symbol',
        // style: 'currency',
      }) +
      ' ' +
      symbol
    );
  }
}
