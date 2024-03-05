import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  constructor(
    private _router: Router
  ){}
  ngOnInit(){
    let users = JSON.parse(localStorage.getItem("UserList") || "[]")
    this.Users = users;
  }

  Users: Array<any>=[]
  Visible:boolean = false
  UserId:string = ''
  userClicked(id: string){
    localStorage.setItem("ItemEdit", id)
    this.Visible = this.Visible?false:true;
    this.UserId = id;
    this._router.navigate(['useredit'], { skipLocationChange: true });
  }
  editUser(id: string){

  }
}
