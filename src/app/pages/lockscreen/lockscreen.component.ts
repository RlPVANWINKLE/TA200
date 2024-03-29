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
    let users = JSON.parse(localStorage.getItem("UserList") || "[]")
    this.Users = users;
    this.Jobs = JSON.parse(localStorage.getItem("JobList") || "[]")
    this.ClockingIn = localStorage.getItem("ClockIn")
    this.intervalId = setInterval(() => {
      this.date = new Date();
    }, 1000);

  }
  Jobs: Array<any>=[]
  ClockingIn: any = ''
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
    localStorage.setItem("ClockIn", "Active")
    this.User = this.Users[selectedindex-1]
    console.log(this.User)
  }
  clockin(){
    if(this.User.fingerprintcount > 0){
      this.screen = 'Jobs';
      localStorage.setItem("ClockIn", "Active")
      setInterval(()=>{
        this.screen = 'lock';
      }, 5000)
    }else{
      this.screen = 'false';
      localStorage.setItem("ClockIn", "InActive")
      setInterval(()=>{
        this.screen = 'lock';
      }, 5000)
    }
  }
  JobCode(id:string){
    this.ClockingIn = localStorage.getItem("ClockIn")
    if(this.ClockingIn != "Inactive"){
      this.screen = 'true';
      setInterval(()=>{
        this.screen = 'lock';
      }, 5000)
      
    }
  }
}
