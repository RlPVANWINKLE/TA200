import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit{
  @Input()
  imageName!: string;
  constructor(){}
  ngOnInit(): void {
    if (this.imageName) {
      this.imageName = "./assets/images/" + this.imageName;
    }
  }
  Scanner(){
    alert("Scanner Click Test");
  }
  ftweb(){
    window.open('http://localhost:4200/ftwebster', 'ftwebster', 'width=350px, height=400px');
  }
}
