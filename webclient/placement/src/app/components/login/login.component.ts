
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmailService } from 'app/services/email.service';
import { JsonDataService } from 'app/services/json-data.service';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router'
import { AuthenticationService } from './../../services/authentication.service';
import { UiDetails } from './../../services/uidetails.service';
import { Data } from '../../services/data.service';

import { Common } from '../../model/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public userForm: FormGroup;
  public modalVerify: FormGroup;
  public modalReset: FormGroup;
  public infoobj;
  private postobject;
  public candidates = [];
  public userRole;
  user: any = {};
  returnUrl: String;
  menuLinks: Common[] = [];

  constructor( @Inject(FormBuilder) fb: FormBuilder, private emailservice: EmailService, private JsonDataService: JsonDataService,
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef, private router: Router, private route: ActivatedRoute,
    private authenticationService: AuthenticationService, private uiDetails: UiDetails, private data: Data) {

    // getting login form data
    this.userForm = fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ['', [Validators.required,  Validators.pattern("[A-Za-z0-9.@!$*&]{6,}")]]
    });
  }

  // on login submit
  onSubmit() {
      }

  ngOnInit() {
  if(this.route.snapshot.queryParams['message'])
    this.data.openSnackBar(this.route.snapshot.queryParams['message'],'ok');

  }
  public result: any;

  public forgotPassword() {
    this.router.navigate(['/forgotPassword']);
  }
  public verifyEmail() {
    this.router.navigate(['/verifyEmail']);
  }
  login() {
    let value = this.userForm.value;

    this.authenticationService.login(value["email"], value["password"])
      .subscribe(
      res => {
        this.data.openSnackBar("Welcome back", 'Ok');
              this.router.navigate(['/home']);
      },
      error => {
       this.data.openSnackBar("Invalid username or password", 'Try again');
              this.router.navigate(['/home']);
      });

  }

  socialAuthentication(socialSite)
  {
      this.authenticationService.socialAuthentication(socialSite) .subscribe(
      data => { 
        this.data.openSnackBar(data["message"], 'Ok');
              this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
      });
  }

  redirect() {
    this.router.navigate(['/home']);
  }
}