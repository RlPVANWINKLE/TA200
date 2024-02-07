import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item-no-icon',
  templateUrl: './list-item-no-icon.component.html',
  styleUrls: ['./list-item-no-icon.component.scss']
})
export class ListItemNoIconComponent implements OnInit {
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
