import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit{
  constructor(
    private _router: Router
  ){}
  ngOnInit() {
    let user = sessionStorage.getItem("ItemEdit");
    // this.UserId = parseInt(user || "[]")
    let users = JSON.parse(sessionStorage.getItem("UserList") || "[]")
    let fingerprints = JSON.parse(sessionStorage.getItem("PrintLog") || "[]")
    // this.User = users[this.UserId-1];
    users.forEach((element: any) => {
      if(element.ClockNumber == user){
        this.User = element
      }
    });
    // fingerprints.forEach((item:any) => {
    //   if(item.ClockNumber == this.User.ClockNumber){
    //     this.fingerprint = item
    //   }
    // });
    }
  UserId:any = 0;
  User:any =
    {
      Id: 0,
      Name: 'Kendra',
      FingerPrint: 0,
      Password: 0,
      Card: 0
    };
    Enroll(){
      this._router.navigate(['finger-selection'], { skipLocationChange: true });
    }
    fingerprint:any = {

    }
}
