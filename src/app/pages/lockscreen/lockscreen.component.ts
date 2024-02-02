import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.scss']
})
export class LockscreenComponent implements OnInit{
  public date = new Date();
  ngOnInit(){
    
  }
  menu(){
    alert("Verify Please");
    localStorage.setItem("menuaccess", "Verified");
  }
  
}
