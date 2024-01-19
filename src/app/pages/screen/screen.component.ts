import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit{
  @Input()
  imageName!: string;
  constructor(
    private _router: Router
  ){}
  ngOnInit(): void {
    if (this.imageName) {
      this.imageName = "./assets/images/" + this.imageName;
    }
  }
  Scanner(){
    alert("Scanner Click Test");
  }
  ftweb(){
    // window.open('https://bucolic-dasik-0b97fb.netlify.app/ftwebster', 'ftwebster', 'width=350px, height=400px');
    const url = this._router.serializeUrl(
    this._router.createUrlTree(['/ftwebster']));
    window.open(url, 'ftwebster', 'width=350px, height=400px');
  }
}
