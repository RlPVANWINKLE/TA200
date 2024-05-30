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
    refresh = false
    locked: any;
    serverstatus: any = 'Disconnected'
    clockstatus:any = 'On'
    public date = new Date();
    intervalId:any;
    title = 'TA200';
    height = visualViewport?.height;
    width = visualViewport?.width;
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
    this.EEnumber1=localStorage.getItem("EENumber1")
    this.EEnumber2=localStorage.getItem("EENumber2")
    this.EEnumber3=localStorage.getItem("EENumber3")
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
    // let expiryDate = new Date(new Date().setHours(new Date().getHours() - 6));
    // console.log(expiryDate.toJSON())
    // this.SendEE()
  }
  Users: Array<any>=[]

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

  async EEData(){
    this.refresh = true
    this.EEnumber1 = (<HTMLInputElement>document.getElementById("EE1")).value
    this.EEnumber2 = (<HTMLInputElement>document.getElementById("EE2")).value
    this.EEnumber3 = (<HTMLInputElement>document.getElementById("EE3")).value
    localStorage.setItem("EENumber1", this.EEnumber1)
    localStorage.setItem("EENumber2", this.EEnumber2)
    localStorage.setItem("EENumber3", this.EEnumber3)
  }
  
}
