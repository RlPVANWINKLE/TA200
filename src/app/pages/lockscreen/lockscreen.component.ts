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
    this.APIKEY = sessionStorage.getItem("APIKEY")
    this.ClientSecretKey = sessionStorage.getItem("ClientSecretKey");
    let user = sessionStorage.getItem("ItemEdit");
    let users = JSON.parse(sessionStorage.getItem("UserList") || "[]")
    this.Users = users;
    users.forEach((element:any) => {
      if(element.ClockNumber == user){
        this.User = element
      }
    });
    this.Jobs = JSON.parse(sessionStorage.getItem("JobList") || "[]")
    this.ClockingIn = sessionStorage.getItem("ClockIn")
    this.intervalId = setInterval(() => {
      this.date = new Date();
    }, 1000);

  }

  menu(){
    if(sessionStorage.getItem("menuaccess") == "Verified"){
      this._router.navigate(["/main"], { skipLocationChange: true })
    }else{
      // sessionStorage.setItem("menuaccess", "Verified");
    }

  }
  currentdate(){
    this.date = new Date();
  }
  Selected(){
    let selectedindex = (<HTMLSelectElement>document.getElementById('selection')).selectedIndex;
    sessionStorage.setItem("ClockIn", "Active")
    this.User = this.Users[selectedindex-1]
    console.log(this.User)
  }
  clockin(){
    if(this.User.fingerprintcount > 0){
      this.screen = 'Jobs';
      sessionStorage.setItem("ClockIn", "Active")
      setInterval(()=>{
        this.screen = 'lock';
      }, 5000)
    }else{
      this.screen = 'false';
      sessionStorage.setItem("ClockIn", "InActive")
      setInterval(()=>{
        this.screen = 'lock';
      }, 5000)
    }
  }
  async JobCode(id:string){
    let punchDate = new Date(new Date().setHours(new Date().getHours() - 6)).toJSON();
    let InOut = sessionStorage.getItem("InOut");
    this.ClockingIn = sessionStorage.getItem("ClockIn")
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
    sessionStorage.setItem("InOut", i)
  }
}
