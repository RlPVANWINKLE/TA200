import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {
  constructor(
    private _router: Router
  ){}
  Visible:boolean = false
  UserId:string = ''
  userClicked(id: string){
    this.Visible = this.Visible?false:true;
    this.UserId = id;
    this._router.navigate(['useredit']);
  }
  editUser(id: string){
    
  }
}
