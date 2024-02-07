import { Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ftwebster',
  templateUrl: './ftwebster.component.html',
  styleUrls: ['./ftwebster.component.scss']
})
export class FTWebsterComponent implements OnInit{
public kind : any = 'IP';
public connected : boolean = false;
public updated: boolean = false;
public conbtn : string = "inline-block"
public updbtn : string = "none"
public serveraddress : any = ""
public port :string = ""
public DNSserver: string = ""
constructor(
  private _router: Router
) {}

  ngOnInit(){
    this.serveraddress = localStorage.getItem("URLAddress")?.toString()

  }
connect(){
  var inputValue = (<HTMLInputElement>document.getElementById('ip')).value;

  this.updbtn = (<HTMLInputElement>document.getElementById('btnupd')).style.display;
  var IPADDRESS = localStorage.getItem("IPAddress");
  if(inputValue == IPADDRESS){
    this.connected = true;
    (<HTMLInputElement>document.getElementById('btnconn')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('btnres')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('btnupd')).style.display = 'inline-block';
  }
  else{
    this.connected = false;
    (<HTMLParagraphElement>document.getElementById("wrongip")).innerText = "Not Connected, please use the appropriate IP address"
  }
}
update(){
  var inputURL = (<HTMLInputElement>document.getElementById('url')).value;
  var inputServerPort = (<HTMLInputElement>document.getElementById('port')).value;
  var inputdns = (<HTMLInputElement>document.getElementById('dns')).value;
  var inputdnscheck = (<HTMLInputElement>document.getElementById('dnscheck')).checked;
  if(inputURL == "https://clock11.fingercheck.com" || inputURL == "https://clock10.fingercheck.com"){
    if(inputServerPort == "80"){
      if(inputdns == "8.8.8.8"){
        if(inputdnscheck == true){
          this.updated = true;
          (<HTMLParagraphElement>document.getElementById("wrongurl")).innerText = " ";
          localStorage.setItem("URLAddress", inputURL);
          (<HTMLInputElement>document.getElementById('btnconn')).style.display = 'none';
          (<HTMLInputElement>document.getElementById('btnres')).style.display = 'inline-block';
          (<HTMLInputElement>document.getElementById('btnupd')).style.display = 'none';
          localStorage.setItem("ServerStatus", "Connected");
        }
        else{
          (<HTMLParagraphElement>document.getElementById("wrongurl")).innerText = "Your DNS server is not checked"
          this.updated = false;
        }
      }
      else{
        (<HTMLParagraphElement>document.getElementById("wrongurl")).innerText = "Your DNS server is incorrect(8.8.8.8)"
        this.updated = false;
      }
    }
    else{
      (<HTMLParagraphElement>document.getElementById("wrongurl")).innerText = "Your server port is incorrect(80)"
      this.updated = false;
    }

  }
  else{
    (<HTMLParagraphElement>document.getElementById("wrongurl")).innerText = "Your server URL is incorrect"
    this.updated = false;
  }
}
restart(){
  localStorage.setItem("ClockStatus", "Restart");
  window.close();
}
}
