import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-card',
  templateUrl: './profileCard.component.html',
  styleUrls: ['./profileCard.component.css']
})
export class ProfileCardComponent implements OnInit {
private flip1="unflip";
    private age=22;
    private email="gowthamjeeva55@gmail.com";
    private mobileNumber="8220002829";
    private experience="5"
    private skills=['Java','JavaScript'];
    private qualifications=['Electronics','Master in Electronics']
    private location=  "Bangalore";
    private communications=['English','Tamil','Hindi']
  constructor() { }
changeCard(){
    if(this.flip1=='unflip')
    this.flip1="flip";
    else{
        this.flip1='unflip'
    }
}
  ngOnInit() {

  }

}
