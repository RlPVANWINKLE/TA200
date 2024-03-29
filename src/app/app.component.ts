import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    locked: any;
    serverstatus: any = 'Disconnected'
    clockstatus:any = 'On'
    public date = new Date();
    intervalId:any;
    title = 'TA200';
    height = visualViewport?.height;
    width = visualViewport?.width;
    APIKEY:any = 'bc31cd5b-1057-413d-8d33-434a580852dc';
    ClientSecretKey: any ='7fca3040-6820-49ea-bcfe-f6521329ebde';
    EEnumber1 = '000001';
    EEnumber2 = '000002';
    EEnumber3 = '000003';
    SideMenu:boolean = false
    Options = 'false'
    public ServerAddress = "testing";
    constructor(
        private _router: Router
    
      ){}
  ngOnInit() {
    this.APIKEY = localStorage.getItem("APIKEY")
    this.ClientSecretKey = localStorage.getItem("ClientSecretKey")
    this.Options = new URL(window.location.href).pathname
    this.serverstatus = localStorage.getItem("ServerStatus");
    this.intervalId = setInterval(() => {
      this.serverstatus = localStorage.getItem("ServerStatus");
      if(this.serverstatus == "Disconnected"){
        (<HTMLSpanElement>document.getElementById("status")).style.color = 'Red'}
      this.clockstatus = localStorage.getItem("ClockStatus");
      var restarted = localStorage.getItem("Restarted");
      if(this.clockstatus != 'On' && restarted == "0"){
          this._router.navigate(["/clock-restart"], { skipLocationChange: true });
          localStorage.setItem("Restarted", "1");
      }
    }, 500);
    let expiryDate = new Date(new Date().setHours(new Date().getHours() - 6));
    console.log(expiryDate.toJSON())
  }
  Users: Array<any>=[]
  async SendEE(){
    let url = `https://wmzeeupjd57owgpb2hjeciiq5e0huipa.lambda-url.us-east-2.on.aws/EmployeeClockInfo/${this.APIKEY}/${this.ClientSecretKey}/${this.EEnumber1}`;
    let options = {
        method: 'GET',            
    };

    try {
        const response = await fetch(url, options);
        let result = await response.text();
        console.log(result)
        let EE = JSON.parse(result || "[]")
        localStorage.setItem("EE1", JSON.stringify(EE));
    } catch (error) {
        console.error(error);
    }
    url = `https://wmzeeupjd57owgpb2hjeciiq5e0huipa.lambda-url.us-east-2.on.aws/EmployeeClockInfo/${this.APIKEY}/${this.ClientSecretKey}/${this.EEnumber2}`;
    options = {
        method: 'GET',            
    };

    try {
        const response = await fetch(url, options);
        let result = await response.text();
        console.log(result)
        let EE = JSON.parse(result || "[]")
        localStorage.setItem("EE2", JSON.stringify(EE));
    } catch (error) {
        console.error(error);
    }
    url = `https://wmzeeupjd57owgpb2hjeciiq5e0huipa.lambda-url.us-east-2.on.aws/EmployeeClockInfo/${this.APIKEY}/${this.ClientSecretKey}/${this.EEnumber3}`;
    options = {
        method: 'GET',            
    };

    try {
        const response = await fetch(url, options);
        let result = await response.text();
        console.log(result)
        let EE = JSON.parse(result || "[]")
        localStorage.setItem("EE3", JSON.stringify(EE));
    } catch (error) {
        console.error(error);
    }

    let EE1 = JSON.parse(localStorage.getItem("EE1")|| "[]")
    let EE2 = JSON.parse(localStorage.getItem("EE2")|| "[]")
    let EE3 = JSON.parse(localStorage.getItem("EE3")|| "[]")

    this.Users.push(EE1)
    this.Users.push(EE2)
    this.Users.push(EE3)
    let printlog = [
        {
            ClockNumber: EE1.ClockNumber,
            FirstName: EE1.FirstName,
            LastName: EE1.LastName,
            Admin: EE1.IsASupervisor,
            fingerprintcount:0,
            fingerprints:[]
        },
        {
            ClockNumber: EE2.ClockNumber,
            FirstName: EE2.FirstName,
            LastName: EE2.LastName,
            Admin: EE2.IsASupervisor,
            fingerprintcount:1,
            fingerprints:[6]
        },
        {
            ClockNumber: EE3.ClockNumber,
            FirstName: EE3.FirstName,
            LastName: EE3.LastName,
            Admin: EE3.IsASupervisor,
            fingerprintcount:0,
            fingerprints:[]
        }
    ]
    localStorage.setItem("UserList", JSON.stringify(printlog))
    this.SideMenuToggle();
    window.location.reload();

}
SideMenuToggle(){
    this.SideMenu = !this.SideMenu
}
Scanner(){
    localStorage.setItem("menuaccess", "Verified")
    var verified = localStorage.getItem("menuaccess");
    var BDActive = localStorage.getItem("backdooractive");
    if(verified == "Verified" && BDActive != "Active"){
      this._router.navigate(["/main"], { skipLocationChange: true })
    }
    else{

    }
  }
  ftweb(){
    const url = this._router.serializeUrl(
      this._router.createUrlTree([`/ftwebster`])
    );

    window.open(url, 'ftwebster', 'width=350px, height=400px');
    this.SideMenuToggle()
  }
  URLTEST(){
    localStorage.setItem("URLAddress", "Test");
  }
//   backroutes(){
//     if(this.backroute == '/'){
//       this._router.navigate([this.backroute], { skipLocationChange: true })
//     }else{
//       this._router.navigate([this.backroute], { skipLocationChange: true })
//     }

//   }
  lockclock(){
    this.locked = true;
    var psswd = new Date();
    var pssdHours = psswd.getHours().toString();
    var password = ((9999-parseInt(pssdHours + (('0'+psswd.getMinutes()).slice(-2)).toString()))*(9999-parseInt(pssdHours + (('0'+psswd.getMinutes()).slice(-2)).toString()))).toString();
    localStorage.setItem("menuaccess", "Unverified");
    localStorage.setItem("backdooractive", "Active");
    localStorage.setItem("backdoorpassword", password);
    this._router.navigate(['/backdoor-prompt'], { skipLocationChange: true });
    this.SideMenuToggle()
  }
  unlockclock(){
    this.locked = false;
    this._router.navigate(['/'],{ skipLocationChange: true })
    localStorage.setItem("menuaccess", "Verified");
    localStorage.setItem("backdooractive", "Inactive");
  }
  async SyncJobs(){
    let url = `https://wmzeeupjd57owgpb2hjeciiq5e0huipa.lambda-url.us-east-2.on.aws/jobs/${this.APIKEY}/${this.ClientSecretKey}`;
    let options = {
        method: 'GET',            
    };

    try {
        const response = await fetch(url, options);
        let result = await response.text();
        console.log(result)
        let jobs: any[] = []
        let JobList: any[] = []
        jobs = JSON.parse(result || "[]")
        jobs.forEach(element => {
          if(element.Code.match(/^[0-9]+$/)){
            JobList.push(element)
          }
        });
        localStorage.setItem("JobList", JSON.stringify(JobList));
        window.location.reload
        this.SideMenuToggle()
    } catch (error) {
        console.error(error);
    }
  }
}
