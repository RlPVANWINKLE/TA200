import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  localStorage.setItem("URLAddress", "22.22.22.2");
  localStorage.setItem("IPAddress", "101.188.67.134");
  localStorage.setItem("menuaccess", "Unverified");
  