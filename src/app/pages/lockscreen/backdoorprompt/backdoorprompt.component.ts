import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-backdoorprompt',
  templateUrl: './backdoorprompt.component.html',
  styleUrls: ['./backdoorprompt.component.scss']
})
export class BackdoorpromptComponent implements OnInit{
  BDId:string = "0000";
  BDIdAccepted:boolean = false;
  constructor(
    private _router: Router
    
  ){}
    ngOnInit(){
      
    }
  OK(){
    var clockId = (<HTMLInputElement>document.getElementById('BDId')).value;
    if(clockId == "8888" && this.BDIdAccepted == false){
      this.BDId = "8888"
      this.BDIdAccepted = true;
    }
  }
  OK2(){
    var clockpassword = (<HTMLInputElement>document.getElementById('BDPassword')).value;
    var BDpsswd = localStorage.getItem("backdoorpassword");
    if(BDpsswd == clockpassword){
      this._router.navigate(['/main'])
    }
  }
}
