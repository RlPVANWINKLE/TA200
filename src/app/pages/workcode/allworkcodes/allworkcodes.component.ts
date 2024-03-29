import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allworkcodes',
  templateUrl: './allworkcodes.component.html',
  styleUrls: ['./allworkcodes.component.scss']
})
export class AllworkcodesComponent implements OnInit{
  ngOnInit(){
    this.Jobs = JSON.parse(localStorage.getItem("JobList") || "[]")
    // this.ClockingIn = localStorage.getItem("ClockIn")
  }
  Jobs: Array<any>=[]
  ClockingIn: any = ''

  JobCode(id:string){
    if(this.ClockingIn != "Inactive"){
      alert(id)
    }
  }
}
