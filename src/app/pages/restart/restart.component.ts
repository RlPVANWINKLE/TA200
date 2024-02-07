import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-restart',
  templateUrl: './restart.component.html',
  styleUrls: ['./restart.component.scss']
})
export class RestartComponent implements OnInit{
  serverstatus: any = 'Disconnected'
  intervalId:any;
  ngOnInit(){
    setTimeout(()=>{
      this._router.navigate(["/"])
    }, 4000)
    this.serverstatus = localStorage.getItem("ServerStatus");
    this.intervalId = setInterval(() => {
      this.serverstatus = localStorage.getItem("ServerStatus");
      if(this.serverstatus == "Disconnected"){
        (<HTMLSpanElement>document.getElementById("status")).style.color = 'Red'
      }else if(this.serverstatus == "Connected")
      {
        (<HTMLSpanElement>document.getElementById("status")).style.color = 'LightGreen'

      }
    }, 5000);
  }
  constructor(
    private _router: Router

  ){}
}
