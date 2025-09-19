import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fingerselection',
  templateUrl: './fingerselection.component.html',
  styleUrls: ['./fingerselection.component.scss']
})
export class FingerselectionComponent implements OnInit{
  constructor(
    private _router: Router
  ){}
  ngOnInit() {
    let user = sessionStorage.getItem("ItemEdit");
    // this.UserId = parseInt(user || "[]")
    let users = JSON.parse(sessionStorage.getItem("UserList") || "[]")
    sessionStorage.setItem("UserList", JSON.stringify(users))
    users.forEach((element:any) => {
      if(element.ClockNumber == user){
        this.User = element
      }
    });
    this.Enrolled(this.User.fingerprints);
    }
  UserId:any = 0;
  User:any =
  {
    Id: 3,
    Name: 'Kendra',
    LName: 'Wheeler',
    FingerPrint: 1,
    Password: 0,
    Card: 0,
    UserRole: 'Normal User',
    fingerprints:[]
  };
  Enrolled(fingerprints:[]){
    fingerprints.forEach(element => {
      (<HTMLDivElement>document.getElementById(element)).style.backgroundColor = "Green";
    });
  }
  Enroll(fingerId:any){
    if(this.User.fingerprints.includes(fingerId) != true){
      this._router.navigate(['/enrollfingerprint'], {skipLocationChange:true})
      sessionStorage.setItem("SelectedFinger", fingerId);
    }
  }
}
