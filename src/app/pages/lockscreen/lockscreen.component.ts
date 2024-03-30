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
  APIKEY:any
  ClientSecretKey:any
  Jobs: Array<any>=[]
  ClockingIn: any = ''
  Users: Array<any>=[]
  Visible:boolean = false
  UserId:string = ''
  User: any
  screen:string = 'lock'
  constructor(
    private _router: Router
  ){}
  ngOnInit(){
    this.APIKEY = localStorage.getItem("APIKEY")
    this.ClientSecretKey = localStorage.getItem("ClientSecretKey");
    let user = localStorage.getItem("ItemEdit");
    let users = JSON.parse(localStorage.getItem("UserList") || "[]")
    this.Users = users;
    users.forEach((element:any) => {
      if(element.ClockNumber == user){
        this.User = element
      }
    });
    this.Jobs = JSON.parse(localStorage.getItem("JobList") || "[]")
    this.ClockingIn = localStorage.getItem("ClockIn")
    this.intervalId = setInterval(() => {
      this.date = new Date();
    }, 1000);

  }

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
  async JobCode(id:string){
    let punchDate = new Date(new Date().setHours(new Date().getHours() - 6)).toJSON();
    let InOut = localStorage.getItem("InOut");
    this.ClockingIn = localStorage.getItem("ClockIn")
    if(this.ClockingIn != "Inactive"){
      this.screen = 'true';
      setInterval(()=>{
        this.screen = 'lock';
      }, 5000)
      const response = await fetch(`https://wmzeeupjd57owgpb2hjeciiq5e0huipa.lambda-url.us-east-2.on.aws/punch/${this.APIKEY}/${this.ClientSecretKey}/${this.User.EmployeeNumber}/${punchDate}/${InOut}/${id}`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        }
      })
      const result = await response.json()
      console.log(result)
    }
  }
  inout(i:string){
    localStorage.setItem("InOut", i)
  }
}
