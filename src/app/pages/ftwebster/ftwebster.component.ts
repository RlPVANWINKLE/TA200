import { Component, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-ftwebster',
  templateUrl: './ftwebster.component.html',
  styleUrls: ['./ftwebster.component.scss']
})
export class FTWebsterComponent {
public kind : any = 'IP';
public connected : boolean = false;
public updated: boolean = false;
public conbtn : string = "inline-block"
public updbtn : string = "none"
constructor() {
}
connect(){
  var inputValue = (<HTMLInputElement>document.getElementById('ip')).value;
  
  this.updbtn = (<HTMLInputElement>document.getElementById('btnupd')).style.display;
  var IPADDRESS = localStorage.getItem("IPAddress");
  if(inputValue == IPADDRESS){
    this.connected = true;
    (<HTMLInputElement>document.getElementById('btnconn')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('btnupd')).style.display = 'inline-block';
  }
}
update(){
  var inputURL = (<HTMLInputElement>document.getElementById('url')).value;
  if(inputURL == "https://clock11.fingercheck.com" || inputURL == "https://clock10.fingercheck.com"){
    this.updated = true;
    (<HTMLParagraphElement>document.getElementById("wrongurl")).innerText = " ";
    localStorage.setItem("URLAddress", inputURL);
  }
  else{
    (<HTMLParagraphElement>document.getElementById("wrongurl")).innerText = "Something is incorrect. Please check your fields"
    this.updated = false;
  }
}
}
