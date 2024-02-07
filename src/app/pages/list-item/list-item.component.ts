import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input()
  parent!: string;
  @Input()
  Icon!: string;
  @Input()
  Title!: string;
  @Input()
  child!: string;
  @Input()
  class!: string;
  _parent = '';
  _child = '';
  constructor(
    private _router: Router,
  ){}
  ngOnInit(): void {
    this._parent = this.parent
    this._child = this.child

  }
  nextPage(){
    this._router.navigate([`${this._parent}/${this._child}`], { skipLocationChange: true });
  }

}
