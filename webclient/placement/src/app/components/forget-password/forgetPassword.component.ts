import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmailService } from 'app/services/email.service';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgetPassword.component.html',
  styleUrls: ['./forgetPassword.component.css'],
  providers: []

})
export class ForgotPasswordComponent implements OnInit {

  public userForm: FormGroup;
  public infoobj;
  private postobject;
  public candidates;
  public timer;
  public emailId = '';

  constructor( @Inject(FormBuilder) fb: FormBuilder, private emailservice: EmailService,
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef, private router: Router, private emailService: EmailService) {
    // getting login form data
    this.userForm = fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    });
  }

  ngOnInit() {
    // this.emailService.getRegister()
    //   .subscribe(resEmployeeData => {
    //     this.emailId = resEmployeeData.usermail2;
    //     console.log(this.emailId);
    //   });
  }

  // snackBar for notification
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  // verify user if already exist or not for password Reset
  // verifyUserReset() {

  //   if (this.candidates.length!=0) {
  //     let link="";
     
  //     this.emailservice.postdata(this.infoobj).subscribe(data => this.postobject = data,
  //       error => [this.openSnackBar('PASSWORD RESET LINK SENT', 'Please Check your mail'),
  //       this.timer = setTimeout(() => this.router.navigate(['/login']), 500)
  //       ], () => console.log('finished'));
  //   } else {
  //     this.openSnackBar('User not Registered', 'Please Register');
  //   }
  // }

  // on password reset submit
  onResetLink() {
     this.infoobj = {
       'title':'',
        'username': this.userForm.value.email,
        'subject': 'Password Reset',
      };
    this.emailService.sendResetPasswordEmail(this.infoobj).subscribe(resEmailData =>{ 
this.openSnackBar(resEmailData.msg,'ok'),
        this.timer = setTimeout(() => this.router.navigate(['/login']), 500)  
      },    error => {
        console.log(error)
        this.openSnackBar("User Doesn't exist",'ok');
      });
  
  }
  onBack() {
    this.router.navigate(['/login']);

  }
}