import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SolutionComponent } from './solution.component';
import { FunctionService } from './services/functionService';
import { ForexService } from './services/forexService';
import { ClarityModule } from 'clarity-angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CurrencyConversionPipe } from './pipes/conversion.pipe';

@NgModule({
   imports: [SharedModule,  ClarityModule.forRoot(), FormsModule, HttpModule],
   declarations: [SolutionComponent, CurrencyConversionPipe],
   exports: [SolutionComponent],
   providers: [FunctionService, ForexService]
})
export class SolutionModule { }
