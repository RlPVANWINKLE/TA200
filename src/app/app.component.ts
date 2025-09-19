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
    printlog:any
    refresh = false
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
    EEnumber1:any = '000001';
    EEnumber2:any = '000002';
    EEnumber3:any = '000003';
    SideMenu:boolean = false
    Options = 'false'
    public ServerAddress = "testing";
    constructor(
        private _router: Router
    
      ){}
  ngOnInit() {
    // sessionStorage.clear()
    this.EEnumber1=sessionStorage.getItem("EENumber1")
    this.EEnumber2=sessionStorage.getItem("EENumber2")
    this.EEnumber3=sessionStorage.getItem("EENumber3")
    this.APIKEY = sessionStorage.getItem("APIKEY")
    this.ClientSecretKey = sessionStorage.getItem("ClientSecretKey")
    this.Options = new URL(window.location.href).pathname
    this.serverstatus = sessionStorage.getItem("ServerStatus");
    this.intervalId = setInterval(() => {
      this.serverstatus = sessionStorage.getItem("ServerStatus");
      if(this.serverstatus == "Disconnected"){
        (<HTMLSpanElement>document.getElementById("status")).style.color = 'Red'}
      this.clockstatus = sessionStorage.getItem("ClockStatus");
      var restarted = sessionStorage.getItem("Restarted");
      if(this.clockstatus != 'On' && restarted == "0"){
          this._router.navigate(["/clock-restart"], { skipLocationChange: true });
          sessionStorage.setItem("Restarted", "1");
      }
    }, 500);
    // let expiryDate = new Date(new Date().setHours(new Date().getHours() - 6));
    // console.log(expiryDate.toJSON())
    // this.SendEE()
  }
  Users: Array<any>=[]
  async SendEE(){
    this.refresh = true
    let EE1 = {
      ClockNumber: "000001",
      EmployeeNumber: "000001",
      FirstName: "John",
      LastName: "Doe",
      IsASupervisor: false,
      fingerprintcount:0,
      fingerprints:[]
    }
    let EE2 = {
      ClockNumber: "000002",
      EmployeeNumber: "000002",
      FirstName: "Jane",
      LastName: "Doe",
      IsASupervisor: true,
      fingerprintcount:1,
      fingerprints:[6]
    }
    let EE3 = {
      ClockNumber: "000003",
      EmployeeNumber: "000003",
      FirstName: "Spencer",
      LastName: "Hendrix",
      IsASupervisor: false,
      fingerprintcount:0,
      fingerprints:[]
    }

    sessionStorage.setItem("EE1", JSON.stringify(EE1));
    sessionStorage.setItem("EE2", JSON.stringify(EE2));
    sessionStorage.setItem("EE3", JSON.stringify(EE3));

    this.Users.push(EE1)
    this.Users.push(EE2)
    this.Users.push(EE3)
    this.printlog = [
        {
            ClockNumber: EE1.ClockNumber,
            EmployeeNumber: EE1.EmployeeNumber,
            FirstName: EE1.FirstName,
            LastName: EE1.LastName,
            Admin: EE1.IsASupervisor,
            fingerprintcount:0,
            fingerprints:[]
        },
        {
            ClockNumber: EE2.ClockNumber,
            EmployeeNumber: EE2.EmployeeNumber,
            FirstName: EE2.FirstName,
            LastName: EE2.LastName,
            Admin: EE2.IsASupervisor,
            fingerprintcount:1,
            fingerprints:[6]
        },
        {
            ClockNumber: EE3.ClockNumber,
            EmployeeNumber: EE2.EmployeeNumber,
            FirstName: EE3.FirstName,
            LastName: EE3.LastName,
            Admin: EE3.IsASupervisor,
            fingerprintcount:0,
            fingerprints:[]
        }
    ]
    sessionStorage.setItem("UserList", JSON.stringify(this.printlog))
    this.refresh=false
    this.SideMenuToggle();
    window.location.reload();

}
SideMenuToggle(){
    this.SideMenu = !this.SideMenu
}
Scanner(){
    sessionStorage.setItem("menuaccess", "Verified")
    var verified = sessionStorage.getItem("menuaccess");
    var BDActive = sessionStorage.getItem("backdooractive");
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
    sessionStorage.setItem("URLAddress", "Test");
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
    sessionStorage.setItem("menuaccess", "Unverified");
    sessionStorage.setItem("backdooractive", "Active");
    sessionStorage.setItem("backdoorpassword", password);
    this._router.navigate(['/backdoor-prompt'], { skipLocationChange: true });
    this.SideMenuToggle()
  }
  unlockclock(){
    this.locked = false;
    this._router.navigate(['/'],{ skipLocationChange: true })
    sessionStorage.setItem("menuaccess", "Verified");
    sessionStorage.setItem("backdooractive", "Inactive");
  }
  async SyncJobs(){
    this.refresh = true
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
        sessionStorage.setItem("JobList", JSON.stringify(JobList));
        window.location.reload
        this.refresh = false
        this.SideMenuToggle()
    } catch (error) {
        console.error(error);
    }
  }
  async EEData(){
    this.refresh = true
    this.EEnumber1 = (<HTMLInputElement>document.getElementById("EE1")).value
    this.EEnumber2 = (<HTMLInputElement>document.getElementById("EE2")).value
    this.EEnumber3 = (<HTMLInputElement>document.getElementById("EE3")).value
    sessionStorage.setItem("EENumber1", this.EEnumber1)
    sessionStorage.setItem("EENumber2", this.EEnumber2)
    sessionStorage.setItem("EENumber3", this.EEnumber3)
    this.SendEE();
  }
  async APIKEYS(){
    this.refresh = true
    this.APIKEY = (<HTMLInputElement>document.getElementById("APIKEY")).value
    this.ClientSecretKey = (<HTMLInputElement>document.getElementById("ClientSecretKey")).value
    sessionStorage.setItem("APIKEY", this.APIKEY)
    sessionStorage.setItem("ClientSecretKey", this.ClientSecretKey)
    this.SendEE()
    this.SyncJobs()
  }
  
}
