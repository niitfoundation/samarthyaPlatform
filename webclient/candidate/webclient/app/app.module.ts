import { UserService } from 'samarthyaCandidate/services/user.service';
import { AuthGuard } from 'samarthyaCandidate/Guard/auth.guard';
import { AuthenticationService } from 'samarthyaCandidate/services/authentication.service';
import { EmailService } from 'samarthyaCandidate/services/email.service';
import { Data } from 'samarthyaCandidate/services/data.service';
import { JsonDataService } from 'samarthyaCandidate/services/json-data.service';
import { CandidateModule } from 'samarthyaCandidate/candidate.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
// import 'hammerjs';
import { AppComponent } from './app.component';
import { Logger } from 'angular2-logger/core';
import { Md2Module } from 'md2';
import { SamProfileCardService } from 'samarthyaWebcomponent/sam-profile/sam-profile-card/sam-profile-card.service';
import { SamProfileSectionConfigService } from 'samarthyaWebcomponent/sam-profile/sam-profile-section/sam-profile-section-config.service';
import { ProfileService } from 'samarthyaWebcomponent/sam-profile/sam-profile-section/sam-profile-section-data.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule.forRoot(),
    Md2Module.forRoot(),
    CandidateModule
  ], exports: [
    MaterialModule
  ],
  providers: [
    EmailService,
    JsonDataService,
    AuthGuard,
    UserService,
    AuthenticationService,
    Logger,
    Data,
    SamProfileCardService,
    SamProfileSectionConfigService
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
})
export class AppModule { }
