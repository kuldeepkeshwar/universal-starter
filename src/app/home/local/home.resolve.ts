/**
 * Created by kuldeepkeshwar on 22/09/16.
 */
import { Injectable }             from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HomeResolve implements Resolve<any> {
  constructor(private _http:Http, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot): Promise<any>|boolean {
    let id = +route.params['division'];
    return this._http.get('/test').toPromise().then(data => {
      if (data) {
        return data;
      } else { // id not found
        this.router.navigate(['/error-page']);
        return false;
      }
    });
  }
}
