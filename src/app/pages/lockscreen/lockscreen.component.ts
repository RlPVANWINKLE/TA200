import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.scss']
})
export class LockscreenComponent implements OnInit{
  public date = new Date();
  intervalId:any;
  constructor(
    private _router: Router
  ){}
  ngOnInit(){
    this.intervalId = setInterval(() => {
      this.date = new Date();
    }, 1000);
    let users = JSON.parse(localStorage.getItem("UserList") || "[]")
    this.Users = users;
  }
  Users: Array<any>=[]
  Visible:boolean = false
  UserId:string = ''
  User: any
  screen:string = 'lock'
  menu(){
    if(localStorage.getItem("menuaccess") == "Verified"){
      this._router.navigate(["/main"], { skipLocationChange: true })
    }else{
      // localStorage.setItem("menuaccess", "Verified");
    }

  }
  currentdate(){
    this.date = new Date();
  }
  Selected(){
    let selectedindex = (<HTMLSelectElement>document.getElementById('selection')).selectedIndex;
    this.User = this.Users[selectedindex-1];
  }
  clockin(){
    if(this.User.FingerPrint > 0){
      this.screen = 'true';
    }else{
      this.screen = 'false';
    }

    setInterval(()=>{
      this.screen = 'lock';
    }, 2000)
  }
}
