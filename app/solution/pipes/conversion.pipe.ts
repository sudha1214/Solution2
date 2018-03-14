import { Pipe, PipeTransform } from '@angular/core';

/**
 * Converts given USD currency to EUR or GBP with the supplied
 * exchange rates
 */
@Pipe({ name: 'convertCurrency' })
export class CurrencyConversionPipe implements PipeTransform {
   transform(billing: number, exchange_to: string, usdeur: number, usdgbp: number): number {
      if (exchange_to === 'EUR') {
         return billing * usdeur;
      } else if (exchange_to === 'GBP') {
         return billing * usdgbp;
      } else {
         return billing;
      }
   }
}
