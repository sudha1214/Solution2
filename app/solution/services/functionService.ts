import { IFaasUsage } from '../../api/FaasUsage';
import { IFaasInfo } from '../../api/FaasInfo';
import { Observable } from 'rxjs/Observable';
import { IFunctionModel } from '../../solution/functionModel';
import { Injectable } from '@angular/core';
import { FaasPlatformService } from '../../impl/faasPlatform.service';

const toStatusJson = ([usage, info]: [IFaasUsage, IFaasInfo]): IFunctionModel => {
   return {
      id: info.id,
      name: info.name,
      description: info.description,
      billingUsage: (usage.totalMonthlyInvocations * info.invocationCost) + (usage.totalMonthlyRuntime * info.runtimeCost)
   };
};

@Injectable()
export class FunctionService {
   constructor(private functionService: FaasPlatformService) { }

   getFunctionIdsBillingUsage$(ids: string[]): Observable<IFunctionModel[]> {
      return Observable.combineLatest(ids.map((id) => this.functionService.getFaasUsage$(id)
         .withLatestFrom(this.functionService.getFaasInfo$(id))
         .map(toStatusJson)));
   }
}
