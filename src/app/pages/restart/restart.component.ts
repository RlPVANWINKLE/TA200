import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-restart',
  templateUrl: './restart.component.html',
  styleUrls: ['./restart.component.scss']
})
export class RestartComponent implements OnInit{
  ngOnInit(){
    setTimeout(()=>{
      this._router.navigate(["/"])
    }, 4000)
  }
  constructor(
    private _router: Router
    
  ){}
}
