// import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './../login/login.component';
import { ActivatedRoute,Router } from "@angular/router";
import { Data } from '../../services/data.service';
import { UiDetails } from './../../services/uidetails.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title;
  dataByRole;
  loginComponent:LoginComponent;
  constructor(private route: ActivatedRoute,private data:Data,private uiDetails:UiDetails,private router:Router) {
      // this.dataByRole=JSON.stringify(this.data.storage);
      //  this.title=this.dataByRole;
  }
  ngOnInit() 
    {
      let tokenVerification=JSON.parse(localStorage.getItem('currentUser'))["token"];
       this.uiDetails.getMenuDetails(tokenVerification)
          .subscribe(
          role => {
            if (role["success"]) {
              this.title = role["object"].Role;
        
            }
            else {
              tokenVerification=null;
               localStorage.removeItem('currentUser');
                this.router.navigate(['/login']);
             this.data.openSnackBar(role["message"], 'Ok');
        
            }


          }, error => {
            console.log(error);
          }
          )
    }
  

}
