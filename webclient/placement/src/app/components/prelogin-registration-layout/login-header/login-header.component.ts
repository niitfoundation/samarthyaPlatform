import { Component, OnInit } from '@angular/core';
import { JsonDataService } from 'app/services/json-data.service';
import { Router} from '@angular/router'


@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css'],
  providers: [JsonDataService]
})
export class LoginHeaderComponent implements OnInit {

  public languages = [];

  constructor(private JsonDataService: JsonDataService,private router:Router) { }

  ngOnInit() {
    // getting languages form json file
    this.JsonDataService.getJsonData().subscribe(resJsonData => this.getdata(resJsonData));
  }
  getdata(jsonData) {
    this.languages = jsonData;
  }
  login() {
   this.router.navigate(['/login']);
  }
  verifyEmail(){
    this.router.navigate(['/verifyEmail']);
  }
  samarthya(){
    this.router.navigate(['/samarthya']);
  }

}