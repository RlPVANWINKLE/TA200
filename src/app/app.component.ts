import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag:any;
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
    // const navEndEvents = _router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // );
    // navEndEvents.subscribe((event: NavigationEnd) => {
    //   gtag('config', 'G-BKD1GRJHBD',{
    //     'page_path': event.urlAfterRedirects
    //   });
    // })
  }
  ngOnInit() {

    this.load()
  }
  async load(){
    const url = 'https://cors-anywhere.herokuapp.com/https://developer.fingercheck.com/api/v1/Sync/GetJobList';
    const options = {
        method: 'GET',
        headers: {
          'APIKEY': 'bc31cd5b-1057-413d-8d33-434a580852dc',
          'ClientSecretKey': '7fca3040-6820-49ea-bcfe-f6521329ebde',
      },
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
  }

}
