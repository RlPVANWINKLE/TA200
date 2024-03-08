import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TA200';
  height = visualViewport?.height;
  width = visualViewport?.width;
  public ServerAddress = "testing";
  constructor(_router: Router){
    const navEndEvents = _router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    // navEndEvents.subscribe((event: NavigationEnd) => {

    // })
  }
  ngOnInit() {
    
  }


}
