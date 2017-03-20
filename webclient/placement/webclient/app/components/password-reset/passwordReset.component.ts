import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { JsonDataService } from 'app/services/json-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmailService } from 'app/services/email.service';
import { Headers } from '@angular/http';
import { Data } from 'app/services/data.service';
import { AuthenticationService } from 'app/services/authentication.service'


// declare var $: any;

@Component({
  selector: 'app-password-reset',
  templateUrl: './passwordReset.component.html',
  styleUrls: ['./passwordReset.component.css']
})

export class PasswordResetComponent implements OnInit {

  public jsonObj = {};
  public languages = [];
  public userForm: FormGroup;
  public emailId = '';
  public password = '';
  public passwordMatchWarning = '';
  public reset:any;
  private token:any;


  constructor( @Inject(FormBuilder) fb: FormBuilder, private Data: Data, private AuthenticationService: AuthenticationService, private JsonDataService: JsonDataService, private route: ActivatedRoute,
    private router: Router, private emailService: EmailService) {
    // register candidate form
    this.userForm = fb.group({
      email: [{ value: '', disabled: true }],
      password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9.@!$*&]{6,24}')]],
      conPassword: ['', [Validators.required, Validators.pattern('[A-Za-z0-9.@!$*&]{6,24}')]],
    });
  }

  ngOnInit() {
     this.route.params.subscribe(params => this.reset = params['reset']);
    if(this.reset=='reset'){
              var currentUser = JSON.parse(localStorage.getItem('currentUser'));
               this.userForm.patchValue({
      'email': currentUser.username
       });
    }
    else{
      this.route.params.subscribe(params => this.token = params['confirm']);
       let email;
      this.AuthenticationService.getEmail(this.token).subscribe((res)=>{
        email=res.data['username'];
         this.userForm.patchValue({
      'email': email
    });
      })   
    }
  }

  getdata(jsonData) {
    this.jsonObj = jsonData;
    this.languages = this.jsonObj['languages'];
  }

  // password confirm Validators
  passwordValue(pass) {
    this.password = pass;
  }
  conPasswordValue(conPass, pass) {
    if (pass !== conPass) {
      this.passwordMatchWarning = 'Password Not Match';
      (<HTMLInputElement>document.getElementById('resetBtn')).disabled = true;
    } else {
      this.passwordMatchWarning = '';
            (<HTMLInputElement>document.getElementById('resetBtn')).disabled = false;

    }
  }

  // on form submit
  onSubmit() {
    if(this.reset=='reset'){
         this.AuthenticationService.passwordChange(this.userForm.get('email').value,this.userForm.get('password').value).subscribe(
      res=>{
        if(res.success==true){
          this.router.navigate(['/home']);
              this.Data.openSnackBar(res.msg, 'OK');
        }
        else{
          this.Data.openSnackBar(res.msg, 'OK');
          this.router.navigate(['/home']);
        }
      }
    );
    }
    else{
    this.AuthenticationService.passwordChange(this.userForm.get('email').value,this.userForm.get('password').value).subscribe(
      res=>{
        if(res.success==true){
          this.router.navigate(['/login']);
              this.Data.openSnackBar(res.msg, 'OK');
        }
        else{
          this.Data.openSnackBar(res.msg, 'OK');
          this.router.navigate(['/login']);
        }
      }
    );
    }
  }

  // on back button
  onBack() {
    this.router.navigate(['/login']);
  }
}