import { FunctionService } from './services/functionService';
import { IFunctionModel } from './functionModel';
import { ForexService } from './services/forexService';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
   moduleId: __moduleName,
   selector: 'my-solution',
   templateUrl: 'solution.component.html'
})


export class SolutionComponent implements OnInit {
   currencies = [
      {value: 'USD', display: 'US Dollar (USD)'},
      {value: 'EUR', display: 'Euro (EUR)'},
      {value: 'GBP', display: 'Pound Sterling (GBP)'}
   ];
   IDS: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

   fnsStatus: Observable<IFunctionModel[]>;
   currencyType: string;
   usd_eur: number;
   usd_gbp: number;
   errorMessage: string;

   constructor(public fnsStatusService: FunctionService, public forexService: ForexService) {
   }

   ngOnInit() {
      this.currencyType = 'USD';
      this.fnsStatus = this.fnsStatusService.getFunctionIdsBillingUsage$(this.IDS);
   }
   onChange(newValue) {
      this.currencyType = newValue;
      this.errorMessage = '';
      if (newValue === 'USD') {
         return;
      }
      this.forexService.getForexRates$().subscribe(res => {
         this.usd_eur = 1.0 / res.rates.USD;
         this.usd_gbp = (res.rates.GBP) / res.rates.USD;
      }, error => {
         console.log(error);
          this.errorMessage = 'Defaulting to currency type USD, as HankerRank only supports HTTPs requests,' +
              ' not available with free subscription of fixer.io. Please run this app locally, ' +
              'to see the working example.';
         this.currencyType = 'USD';
      });
   }
}

