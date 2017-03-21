import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import {CandidateRegister} from '../modal/candidate-register.modal';
@Injectable()
export class PlacementRegisterService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = '';
  constructor(private http: Http) { }
  add(userdata): any {
    this.url='/coordinates'
    return this.http.post(this.url,userdata).map((response: Response) => response.json());

  }
  verifyToken(token){
    this.url="/auth/verify-email";
        return this.http.post(this.url, {token:token}).map((response: Response) => response.json());

  }

  private handleError(error: any): any {
    return false;
  }
}