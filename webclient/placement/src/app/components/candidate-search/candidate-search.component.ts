import { Component, OnInit ,Inject} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-candidate-search',
  templateUrl: './candidate-search.component.html',
  styleUrls: ['./candidate-search.component.css']
})
export class CandidateSearchComponent implements OnInit {
public cls='search-box big-res';
  public searchForm: FormGroup;
  public lengthOfProfile=10;
  public loopingCount=Math.ceil(10/3);
  public resultProfile=[1,2,3,4,5,6,7,8,9,10];
  public arr=new Array(this.loopingCount);
  public count=0;
  public loops=-1;
  public message="";
  getArray(){
    for(let obj in this.resultProfile)
    {
      
      if(this.count%3==0)
      {
        this.arr[++this.loops]=new Array(3);
      }
      this.arr[this.loops][this.count]=obj;
      this.count++;
    }
        console.log(this.arr)

    
    
  }
 
  constructor(@Inject(FormBuilder) fb: FormBuilder) {
this.searchForm = fb.group({
      searchControl: ['', [Validators.required]],


   });
  }

  ngOnInit() {
    this.getArray();

  }
  public getSearch(){
console.log(this.searchForm.value.searchControl);
    
  }
  
 public change()
 {
 this.cls='expand-out search-box big-res';
  }
  public fullView()
  {
  this.cls='expand search-box big-res';
  }
 
}
