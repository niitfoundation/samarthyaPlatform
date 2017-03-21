import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AuthenticationService } from "./authentication.service"
import 'rxjs/add/operator/toPromise';
import { Common } from './../model/common';
import { Observable } from 'rxjs/Observable'; //http request using observable
import 'rxjs/add/operator/map'  // map operatror for observable
@Injectable()
export class UiDetails {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = '/api/layout/navigationlinks';
  constructor(private http: Http, private authenticationService: AuthenticationService) { };
 getMenuDetails(token): Observable<Common[]> {
    return this.http.get(this.url, this.authoriZation(token))
      .map((response: Response) => {
        let body = response.json();
        return body;
      });
  }

  private authoriZation(userToken) {
    if (userToken) {
      let headers = new Headers({ 'Authorization': userToken });
      return new RequestOptions({ headers: headers });
    }

  }

}