import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit{
  @Input()
  imageName!: string;
  @Input()
  BG: string = 'base'
  @Input()
  backroute: any = '/main'
  locked: any;
  serverstatus: any = 'Disconnected'
  clockstatus:any = 'On'
  public date = new Date();
  intervalId:any;
  constructor(
    private _router: Router
    
  ){}
  ngOnInit(){
    if (this.imageName) {
      this.imageName = "./assets/images/" + this.imageName;
    }
    if(this.BG != 'base'){
      (<HTMLDivElement>document.getElementById('background')).style.backgroundImage = 'linear-gradient(180deg, Blue, lightblue)'
    }else{
      (<HTMLDivElement>document.getElementById('background')).style.background = 'black'
    }
    this.serverstatus = localStorage.getItem("ServerStatus");
    this.intervalId = setInterval(() => {
      this.serverstatus = localStorage.getItem("ServerStatus");
      if(this.serverstatus == "Disconnected"){
        (<HTMLSpanElement>document.getElementById("status")).style.color = 'Red'
      }else if(this.serverstatus == "Connected")
      {
        (<HTMLSpanElement>document.getElementById("status")).style.color = 'LightGreen'
        
      }
      this.clockstatus = localStorage.getItem("ClockStatus");
      var restarted = localStorage.getItem("Restarted");
      if(this.clockstatus != 'On' && restarted == "0"){
          this._router.navigate(["/clock-restart"]);
          localStorage.setItem("Restarted", "1");
      }

    }, 500);
  }
  Scanner(){
    localStorage.setItem("menuaccess", "Verified")
    var verified = localStorage.getItem("menuaccess");
    var BDActive = localStorage.getItem("backdooractive");
    if(verified == "Verified" && BDActive != "Active"){
      this._router.navigate(["/main"])
    }
    else{
      
    }
  }
  ftweb(){
    const url = this._router.serializeUrl(
      this._router.createUrlTree([`/ftwebster`])
    );
  
    window.open(url, 'ftwebster', 'width=350px, height=400px');
  }
  URLTEST(){
    localStorage.setItem("URLAddress", "Test");
  }
  backroutes(){
    if(this.backroute == '/'){
      this._router.navigate([this.backroute])
    }else{
      this._router.navigate([this.backroute])
    }

  }
  lockclock(){
    this.locked = true;
    var psswd = new Date();
    var pssdHours = psswd.getHours().toString();
    var password = ((9999-parseInt(pssdHours + (('0'+psswd.getMinutes()).slice(-2)).toString()))*(9999-parseInt(pssdHours + (('0'+psswd.getMinutes()).slice(-2)).toString()))).toString();
    localStorage.setItem("menuaccess", "Unverified");
    localStorage.setItem("backdooractive", "Active");
    localStorage.setItem("backdoorpassword", password);
    this._router.navigate(['/backdoor-prompt']);
  }
  unlockclock(){
    this.locked = false;
    this._router.navigate(['/'])
    localStorage.setItem("menuaccess", "Verified");
    localStorage.setItem("backdooractive", "Inactive");
  }
}
