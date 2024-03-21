import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enrollfp',
  templateUrl: './enrollfp.component.html',
  styleUrls: ['./enrollfp.component.scss']
})
export class EnrollfpComponent {
  constructor(
    private _router: Router
  ){}
  TimesScanned: any = 0;
  Scanner(){
    if(this.TimesScanned < 3){
      (<HTMLDivElement>document.getElementById('fingerprint')).style.border = '15px solid LightGreen';
      this.TimesScanned++;
      if(this.TimesScanned == 1){
        (<HTMLDivElement>document.getElementById('once')).style.backgroundColor = 'Green';
        (<HTMLDivElement>document.getElementById('once')).style.color = 'Green';
        (<HTMLDivElement>document.getElementById('title')).innerHTML = '<i class="fa-solid fa-info BGRed py-1 px-2" style="border: 1px solid white; border-radius: 45%;"></i> Second Press';
        (<HTMLDivElement>document.getElementById('fingerprint')).innerHTML = '<i class=" fa-sharp fa-solid fa-fingerprint fs-1 mt-1 White"></i>';
        setTimeout(()=>{
          (<HTMLDivElement>document.getElementById('fingerprint')).style.border = '1px solid White';
          (<HTMLDivElement>document.getElementById('fingerprint')).innerHTML = '';
        },750)
      }
      if(this.TimesScanned == 2){
        (<HTMLDivElement>document.getElementById('twice')).style.backgroundColor = 'Green';
        (<HTMLDivElement>document.getElementById('twice')).style.color = 'Green';
        (<HTMLDivElement>document.getElementById('title')).innerHTML = '<i class="fa-solid fa-info BGRed py-1 px-2" style="border: 1px solid white; border-radius: 45%;"></i> Third Press';
        (<HTMLDivElement>document.getElementById('fingerprint')).innerHTML = '<i class=" fa-sharp fa-solid fa-fingerprint fs-1 mt-1 White"></i>'
        setTimeout(()=>{
          (<HTMLDivElement>document.getElementById('fingerprint')).style.border = '1px solid White';
          (<HTMLDivElement>document.getElementById('fingerprint')).innerHTML = '';
        },750)
      }
      if(this.TimesScanned == 3){
        (<HTMLDivElement>document.getElementById('thrice')).style.backgroundColor = 'Green';
        (<HTMLDivElement>document.getElementById('thrice')).style.color = 'Green';
        (<HTMLDivElement>document.getElementById('title')).innerHTML = '<i class="fa-solid fa-info BGRed py-0 px-1" style="border: 1px solid white; border-radius: 45%;"></i> Enroll Successful!';
        (<HTMLDivElement>document.getElementById('fingerprint')).style.backgroundColor = 'Green';
        (<HTMLDivElement>document.getElementById('fingerprint')).innerHTML = '<i class="fa-solid fa-check fs-1 mt-1 LightGreen"></i>'
        let UserId:any = 0;
        UserId = localStorage.getItem("ItemEdit");
        let FingerIndex = localStorage.getItem("SelectedFinger");
        let users = JSON.parse(localStorage.getItem("UserList") || "[]");
        users[UserId-1].FingerPrint = users[UserId-1].FingerPrint+1;
        users[UserId-1].fingerprints.push(FingerIndex);
        console.log(users[UserId-1]);
        localStorage.setItem("UserList", JSON.stringify(users))
        setTimeout(()=>{
          this._router.navigate(['/useredit'])
        }, 1500)
        
      }
    }
  }
}
