import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  localStorage.setItem("URLAddress", "22.22.22.2");
  localStorage.setItem("IPAddress", "101.188.67.134");
  localStorage.setItem("menuaccess", "Verified");
  localStorage.setItem("backdoortime", "test");
  localStorage.setItem("backdoorclockid", "8888");
  localStorage.setItem("backdoorpassword", "test");
  localStorage.setItem("locked", "false");
  localStorage.setItem("ServerStatus", "Disconnected");
  localStorage.setItem("ClockStatus", "On");
  localStorage.setItem("Restarted", "0")
  