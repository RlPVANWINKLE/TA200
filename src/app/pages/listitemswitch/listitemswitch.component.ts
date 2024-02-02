import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listitemswitch',
  templateUrl: './listitemswitch.component.html',
  styleUrls: ['./listitemswitch.component.scss']
})
export class ListitemswitchComponent  implements OnInit {
  @Input()
  parent!: string;
  @Input()
  Title!: string;
  @Input()
  Value!: string;
  @Input()
  child!: string;
  @Input()
  class!: string;
  @Input()
  status: boolean = true;
  @Input()
  _id: string = "one";
  _parent = '';
  _child = '';
  constructor(
    private _router: Router,
  ){}
  ngOnInit(): void {
    this._parent = this.parent;
    this._child = this.child;
    (<HTMLInputElement>document.getElementById(this._id)).checked = this.status
    
  }
  nextPage(){
    this._router.navigate([`${this._parent}/${this._child}`]);
  }

}
