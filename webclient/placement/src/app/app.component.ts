import { AuthenticationService } from 'placementmodule/services/authentication.service';
import { AuthGuard } from 'placementmodule/services/auth.guard';

import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  loading: boolean = true;

  constructor(private authService: AuthenticationService) {

  }

  ngOnInit() {

  }
  doLogOut(): void {
    this.authService.logout();
  }
}
