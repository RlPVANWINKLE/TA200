import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent  implements OnInit{
  @Input()
  imageName!: string;
  @Input()
  BG: string = 'base'
  @Input()
  backroute: any = '/main'
  locked: any;
  serverstatus: any = 'Disconnected'
  clockstatus:any = 'On'
  public date = new Date();
  intervalId:any;
  APIKEY:any = ''
  ClientSecretKey:any =''
  constructor(
    private _router: Router

  ){}
  ngOnInit(){

  }

}
