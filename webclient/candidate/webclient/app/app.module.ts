import { UserService } from 'candidatemodule/services/user.service';
import { AuthGuard } from 'candidatemodule/Guard/auth.guard';
import { AuthenticationService } from 'candidatemodule/services/authentication.service';
import { EmailService } from 'candidatemodule/services/email.service';
import { Data } from 'candidatemodule/services/data.service';
import { JsonDataService } from 'candidatemodule/services/json-data.service';
import { CandidateModule } from 'candidatemodule/candidate.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { Logger } from 'angular2-logger/core';
import { Md2Module } from 'md2';
import { SamProfileSectionPersonalinfoService } from 'candidatemodule/sam-profile-section-services/sam-profile-section-personalinfo.service';
import { SamProfileCardService } from 'candidatemodule/sam-profile-section-services/sam-profile-card.service';
import { SamProfileSectionSkillsService } from 'candidatemodule/sam-profile-section-services/sam-profile-section-skills.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule.forRoot(),
    Md2Module.forRoot(),
    // AppRoutingModule,
    // ReactiveFormsModule,
    // FlexLayoutModule,

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
    SamProfileSectionPersonalinfoService,
    SamProfileSectionSkillsService,
    SamProfileCardService,
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
})
export class AppModule { }
