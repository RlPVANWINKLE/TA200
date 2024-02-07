import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.scss']
})
export class LockscreenComponent implements OnInit{
  public date = new Date();
  intervalId:any;
  constructor(
    private _router: Router
  ){}
  ngOnInit(){
    this.intervalId = setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
  menu(){
    if(localStorage.getItem("menuaccess") == "Verified"){
      this._router.navigate(["/main"], { skipLocationChange: true })
    }else{
      // localStorage.setItem("menuaccess", "Verified");
    }

  }
  currentdate(){
    this.date = new Date();
  }

}
