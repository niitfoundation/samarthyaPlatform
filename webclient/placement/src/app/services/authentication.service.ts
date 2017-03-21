import { not } from '@angular-cli/ast-tools/node_modules/rxjs/util/not';
import { inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Headers, Http, Response,RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable'; //http request using observable
import 'rxjs/add/operator/map'  // map operatror for observable
// this service is used to authenticate the current user is logged in or not

@Injectable()
export class AuthenticationService {
    public token: string;
    private headers = new Headers({ 'Content-Type': 'application/json'});
    
    constructor(private http: Http, private router: Router) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<string> {
        return this.http.post('/auth', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json().authToken;
                if (token) {
                    console.log(token);
                    // set token property
                    this.token = token;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token,role:response.json().role }));
                    // return true to indicate successful login
                    return response.json();
                } else {
                    // return false to indicate failed login
                    return response.json();
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;

        localStorage.removeItem('currentUser');
        this.router.navigate(['/'])
    }

    getPasswordResetToken(token,username){
                return this.http.post('/emailverify/passwordResetToken',{ username: username, token: token })
                 .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json().authToken;
                if (token) {
                    // set token property
                    this.token = token;
                    // return true to indicate successful login
                    return response.json();
                } else {
                    // return false to indicate failed login
                    return response.json();
                }
            });
    }
//change password for existing placement role user
    passwordChange(email,password){
            return this.http.post('/auth/reset-password',{ username: email, password: password })
                 .map((response: Response) => {
                // login successful if there's a jwt token in the response
               return response.json();
            });
    }
    socialAuthentication(socialSite)
    {
        
       
         return this.http.get('/auth/facebook',this.authoriZation())
                 .map((response: Response) => {
                // login successful if there's a jwt token in the response
               return response.json();
            });
    
}

getEmail(token){
     return this.http.post('/auth/verify-email',{token:token})
                 .map((response: Response) => {
                // login successful if there's a jwt token in the response
            
               return response.json();
            });
    
}

getCreatedBy(){
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if(currentUser){
        return currentUser.username;
    }
    else{
        return currentUser;
    }

}
 private authoriZation() {
 
      let headers = new Headers({'Access-Control-Allow-Origin': "*","Access-Control-Allow-Headers": "X-Requested-With" });
      return new RequestOptions({ headers: headers });
    

  }
}