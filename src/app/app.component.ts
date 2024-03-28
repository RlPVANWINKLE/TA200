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
    const url = 'https://corsproxy.io/?https://developer.fingercheck.com/api/v1/Sync/GetJobList';
    const options = {
        method: 'GET',
        headers: {
          // 'x-cors-api-key' : 'temp_afb6f569718927fedc5b901b041d4bba',
          'Accept': 'application/json',
          'APIKEY': 'bc31cd5b-1057-413d-8d33-434a580852dc',
          'ClientSecretKey': '7fca3040-6820-49ea-bcfe-f6521329ebde',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
      },
    };
    fetch(url,options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
  }
}
