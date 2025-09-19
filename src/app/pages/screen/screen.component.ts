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
  APIKEY:any = ''
  ClientSecretKey:any =''
  constructor(
    private _router: Router

  ){}
  ngOnInit(){
    this.APIKEY = sessionStorage.getItem("APIKEY");
    this.ClientSecretKey = sessionStorage.getItem("ClientSecretKey");
    if (this.imageName) {
      this.imageName = "./assets/images/" + this.imageName;
    }
    if(this.BG != 'base'){
      (<HTMLDivElement>document.getElementById('background')).style.backgroundImage = 'linear-gradient(180deg, Blue, lightblue)'
    }else{
      (<HTMLDivElement>document.getElementById('background')).style.background = 'black'
    }
    this.serverstatus = sessionStorage.getItem("ServerStatus");
    this.intervalId = setInterval(() => {
      this.serverstatus = sessionStorage.getItem("ServerStatus");
      if(this.serverstatus == "Disconnected"){
        (<HTMLSpanElement>document.getElementById("status")).style.color = 'Red'}
      // }else if(this.serverstatus == "Connected")
      // {
      //   (<HTMLSpanElement>document.getElementById("status")).style.color = 'LightGreen'

      // }
      this.clockstatus = sessionStorage.getItem("ClockStatus");
      var restarted = sessionStorage.getItem("Restarted");
      if(this.clockstatus != 'On' && restarted == "0"){
          this._router.navigate(["/clock-restart"], { skipLocationChange: true });
          sessionStorage.setItem("Restarted", "1");
      }

    }, 500);
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
  }
  URLTEST(){
    sessionStorage.setItem("URLAddress", "Test");
  }
  backroutes(){
    if(this.backroute == '/'){
      this._router.navigate([this.backroute], { skipLocationChange: true })
    }else{
      this._router.navigate([this.backroute], { skipLocationChange: true })
    }

  }
  lockclock(){
    this.locked = true;
    var psswd = new Date();
    var pssdHours = psswd.getHours().toString();
    var password = ((9999-parseInt(pssdHours + (('0'+psswd.getMinutes()).slice(-2)).toString()))*(9999-parseInt(pssdHours + (('0'+psswd.getMinutes()).slice(-2)).toString()))).toString();
    sessionStorage.setItem("menuaccess", "Unverified");
    sessionStorage.setItem("backdooractive", "Active");
    sessionStorage.setItem("backdoorpassword", password);
    this._router.navigate(['/backdoor-prompt'], { skipLocationChange: true });
  }
  unlockclock(){
    this.locked = false;
    this._router.navigate(['/'],{ skipLocationChange: true })
    sessionStorage.setItem("menuaccess", "Verified");
    sessionStorage.setItem("backdooractive", "Inactive");
  }
  SendEE(){

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
        sessionStorage.setItem("JobList", JSON.stringify(JobList));
    } catch (error) {
        console.error(error);
    }
  }
}
