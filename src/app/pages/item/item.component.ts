import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input()
  parent!: string;
  @Input()
  child!: string;
  @Input()
  class: string = 'm-item';
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
    this._router.navigate([`${this._parent}/${this._child}`]);
  }
}
