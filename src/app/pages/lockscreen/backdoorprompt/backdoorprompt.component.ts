import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-backdoorprompt',
  templateUrl: './backdoorprompt.component.html',
  styleUrls: ['./backdoorprompt.component.scss']
})
export class BackdoorpromptComponent implements OnInit{
  BDId:string = "";
  BDIdAccepted:boolean = false;
  BDPassword:string = "";
  public date = new Date();
  intervalId:any;
  constructor(
    private _router: Router

  ){}
    ngOnInit(){
      var psswd = new Date();
      var pssdHours = psswd.getHours().toString();
      var password = ((9999-parseInt(pssdHours + (('0'+psswd.getMinutes()).slice(-2)).toString()))*(9999-parseInt(pssdHours + (('0'+psswd.getMinutes()).slice(-2)).toString()))).toString();
      localStorage.setItem("backdoorpassword", password);
      this.intervalId = setInterval(() => {
        psswd = new Date();
        pssdHours = psswd.getHours().toString();
        password = ((9999-parseInt(pssdHours + (('0'+psswd.getMinutes()).slice(-2)).toString()))*(9999-parseInt(pssdHours + (('0'+psswd.getMinutes()).slice(-2)).toString()))).toString();
        localStorage.setItem("backdoorpassword", password);
      }, 1000);
    }
  OK(){
    var clockId = (<HTMLInputElement>document.getElementById('BDId'));
    if(clockId.value == "8888" && this.BDIdAccepted == false){
      this.BDId = "8888"
      this.BDIdAccepted = true;
      clockId.style.backgroundColor = 'White'
    }else{
      clockId.style.backgroundColor = 'Red'
      this.BDId = ""
    }
  }
  OK2(){
    var clockpassword = (<HTMLInputElement>document.getElementById('BDPassword'));
    var BDpsswd = localStorage.getItem("backdoorpassword");
    if(BDpsswd == clockpassword.value){
      this._router.navigate(['/main'], { skipLocationChange: true })
      clockpassword.style.backgroundColor = 'White'
    }else{
      clockpassword.style.backgroundColor = 'Red'
      this.BDPassword = ""
    }
  }
  numclick(num:any){
    if(this.BDIdAccepted == false){
    this.BDId = this.BDId.toString() + num.toString()
    }else{
      this.BDPassword = this.BDPassword.toString() + num.toString()
    }
  }
}
