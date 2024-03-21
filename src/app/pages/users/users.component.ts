import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(
    private _router: Router
  ){}
  nextPage(menu: string){
    this._router.navigate([`users/}`], { skipLocationChange: true });
  }
}
