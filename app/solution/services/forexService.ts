import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ForexService {
   constructor(private http: Http) { }

   getForexRates$(): Observable<any> {
      const url = 'http://data.fixer.io/api/latest?access_key=9c42258daad495adce790b9e2f546b3f&symbols=USD,GBP';
      return this.http.get(url)
          .map(res => {
             let response = res.json();
              if (response.success) {
                  return response;
              } else {
                  throw Observable.throw(response.error);
              }
          })
          .catch(error => {
             return Observable.throw(error);
          });
   }
}
