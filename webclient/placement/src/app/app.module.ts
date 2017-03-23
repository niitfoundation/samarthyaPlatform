import { Data } from 'placementmodule/services/data.service';
import { UiDetails } from 'placementmodule/services/uidetails.service';
import { EmailService } from 'placementmodule/services/email.service';
import { JsonDataService } from 'placementmodule/services/json-data.service';
import { AuthGuard } from 'placementmodule/services/auth.guard';
import { AuthenticationService } from 'placementmodule/services/authentication.service';
import { PlacementRegisterService } from 'placementmodule/services/placement-register.service';
import { placementmodule } from 'placementmodule/placementmodule';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {Md2Module} from 'md2';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
    Md2Module.forRoot(),
    FormsModule, 
    placementmodule 
    
  ],
  providers: [PlacementRegisterService, AuthenticationService, AuthGuard, JsonDataService, EmailService, UiDetails,Data],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
   ]
})
export class AppModule { }
