import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {Md2Module} from 'md2';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { CandidateRegisterComponent } from './components/candidate-register/candidate-register.component';
import { CandidateSearchComponent } from './components/candidate-search/candidate-search.component';
import { EmployersComponent } from './components/employers/employers.component';
import { EventPostComponent } from './components/event-post/event-post.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';
import { AuthenticationService } from './services/authentication.service';
import { PlacementRegisterService } from './services/placement-register.service';
import { AuthGuard } from './services/auth.guard'
import { EmailService } from 'app/services/email.service';
import { JsonDataService } from 'app/services/json-data.service';
import { UiDetails } from 'app/services/uidetails.service';
import { Data } from 'app/services/data.service';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {LoginHeaderComponent} from './components/prelogin-registration-layout/login-header/login-header.component';
import {LoginFooterComponent} from './components/prelogin-registration-layout/login-footer/login-footer.component';
import {AfterLoginHeaderComponent} from './components/postlogin-registration-layout/header-layout/headerLayout.component';
import {FooterComponent} from './components/postlogin-registration-layout/footer-layout/footer.component';
import {VerifyEmailComponent} from 'app/components/verify-email/verifyEmail.component'
import {ForgotPasswordComponent} from 'app/components/forget-password/forgetPassword.component'
import {PasswordResetComponent} from 'app/components/password-reset/passwordReset.component'
import {LandingPageComponent} from 'app/components/landing-page/landing-page.component';
import {ProfileCardComponent} from 'app/components/profile-card/profileCard.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
    Md2Module.forRoot(),
    FormsModule,  
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFrDXmfEyDR7DPrwGJYtmK4fAyXGgRic4'
    })
  ],
  providers: [PlacementRegisterService, AuthenticationService, AuthGuard, JsonDataService, EmailService, UiDetails,Data],
  bootstrap: [AppComponent],
  declarations: [
    LoginComponent,
    DashboardComponent,
    CandidateRegisterComponent,
    CandidateSearchComponent,
    EmployersComponent,
    EventPostComponent,
    JobPostComponent,
    AdminRegistrationComponent,
    LoginHeaderComponent,
    LoginFooterComponent,
    AfterLoginHeaderComponent,
    FooterComponent,
    AboutUsComponent,
    AppComponent,
    AdminRegistrationComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    PasswordResetComponent,
    LandingPageComponent,
    ProfileCardComponent
]
})
export class AppModule { }
