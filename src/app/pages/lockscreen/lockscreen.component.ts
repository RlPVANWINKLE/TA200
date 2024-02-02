import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.scss']
})
export class LockscreenComponent implements OnInit{
  public date = new Date();
  constructor(
    private _router: Router
  ){}
  ngOnInit(){
    
  }
  menu(){
    if(localStorage.getItem("menuaccess") == "Verified"){
      this._router.navigate(["/main"])
    }else{
      // localStorage.setItem("menuaccess", "Verified");
    }
    
  }
  
}
