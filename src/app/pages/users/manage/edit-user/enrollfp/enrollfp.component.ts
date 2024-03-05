import { Component } from '@angular/core';

@Component({
  selector: 'app-enrollfp',
  templateUrl: './enrollfp.component.html',
  styleUrls: ['./enrollfp.component.scss']
})
export class EnrollfpComponent {
  TimesScanned: any = 0;
  Scanner(){
    if(this.TimesScanned < 3){
      (<HTMLDivElement>document.getElementById('fingerprint')).style.border = '15px solid LightGreen';
      this.TimesScanned++;
      if(this.TimesScanned == 1){
        (<HTMLDivElement>document.getElementById('once')).style.backgroundColor = 'Green';
        (<HTMLDivElement>document.getElementById('once')).style.color = 'Green';
        (<HTMLDivElement>document.getElementById('title')).innerHTML = '<i class="fa-solid fa-info BGRed py-1 px-2" style="border: 1px solid white; border-radius: 45%;"></i> Second Press'

      }
      if(this.TimesScanned == 2){
        (<HTMLDivElement>document.getElementById('twice')).style.backgroundColor = 'Green';
        (<HTMLDivElement>document.getElementById('twice')).style.color = 'Green';
        (<HTMLDivElement>document.getElementById('title')).innerHTML = '<i class="fa-solid fa-info BGRed py-1 px-2" style="border: 1px solid white; border-radius: 45%;"></i> Third Press'

      }
      if(this.TimesScanned == 3){
        (<HTMLDivElement>document.getElementById('thrice')).style.backgroundColor = 'Green';
        (<HTMLDivElement>document.getElementById('thrice')).style.color = 'Green';
        (<HTMLDivElement>document.getElementById('title')).innerHTML = '<i class="fa-solid fa-info BGRed py-0 px-1" style="border: 1px solid white; border-radius: 45%;"></i> Enroll Successful!';
        (<HTMLDivElement>document.getElementById('fingerprint')).style.backgroundColor = 'Green';
        let UserId:any = 0;
        UserId = localStorage.getItem("UserId");
        let users = JSON.parse(localStorage.getItem("UserList") || "[]");
        users[UserId-1].FingerPrint = users[UserId-1].FingerPrint+1;
        alert(users[UserId-1].FingerPrint)
        localStorage.setItem("ItemList", JSON.stringify(users))
      }
      setTimeout(()=>{
        (<HTMLDivElement>document.getElementById('fingerprint')).style.border = '1px solid White';
      },750)
    }
  }
}
