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
    let users = JSON.parse(sessionStorage.getItem("UserList") || "[]")
    this.Users = users;
    // let EE1 = JSON.parse(sessionStorage.getItem("EE1")|| "[]")
    // let EE2 = JSON.parse(sessionStorage.getItem("EE2")|| "[]")
    // let EE3 = JSON.parse(sessionStorage.getItem("EE3")|| "[]")

    // this.Users.push(EE1)
    // this.Users.push(EE2)
    // this.Users.push(EE3)

    // console.log(EE1)
  }

  Users: Array<any>=[]
  Visible:boolean = false
  UserId:string = ''
  userClicked(id: string){
    sessionStorage.setItem("ItemEdit", id)
    this.Visible = this.Visible?false:true;
    this.UserId = id;
    this._router.navigate(['edit-delete'], { skipLocationChange: true });
  }
  editUser(id: string){

  }
}
