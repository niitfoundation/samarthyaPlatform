import { Component, OnInit } from '@angular/core';
import { JsonDataService } from 'app/services/json-data.service';

@Component({
  selector: 'app-login-footer',
  templateUrl: './login-footer.component.html',
  styleUrls: ['./login-footer.component.css']
})
export class LoginFooterComponent implements OnInit {

  public languages = [];

  constructor(private JsonDataService: JsonDataService) { }

  ngOnInit() {
        this.JsonDataService.getJsonData().subscribe(resJsonData => this.getdata(resJsonData));
  }
  getdata(jsonData) {
    this.languages = jsonData;
  }

}
