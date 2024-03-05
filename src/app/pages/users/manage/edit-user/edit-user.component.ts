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
    let user = localStorage.getItem("ItemEdit");
    this.UserId = parseInt(user || "[]")
    let users = JSON.parse(localStorage.getItem("UserList") || "[]")
    this.User = users[this.UserId-1];
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
      this._router.navigate(['enrollfingerprint']);
    }
}
