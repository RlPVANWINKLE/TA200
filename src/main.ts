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
  localStorage.setItem("Restarted", "0");
  localStorage.setItem("SelectedFinger","0");
  // let Users=[
  //   {
  //     Id: 1,
  //     Name: 'Bob',
  //     LName: 'Marley',
  //     FingerPrint: 0,
  //     Password: 0,
  //     Card: 0,
  //     UserRole: 'Super Admin',
  //     fingerprints:[]
  //   },
  //   {
  //     Id: 2,
  //     Name: 'Seth',
  //     LName: 'Sorenson',
  //     FingerPrint: 2,
  //     Password: 0,
  //     Card: 0,
  //     UserRole: 'Normal User',
  //     fingerprints:[3,6]
  //   },
  //   {
  //     Id: 3,
  //     Name: 'Kendra',
  //     LName: 'Wheeler',
  //     FingerPrint: 0,
  //     Password: 0,
  //     Card: 0,
  //     UserRole: 'Normal User',
  //     fingerprints:[]
  //   }
  // ]
  // localStorage.setItem("UserList", JSON.stringify(Users));
  localStorage.setItem("ItemEdit", "0");
  localStorage.setItem("ClockIn", "Inactive");
  localStorage.setItem("APIKEY","bc31cd5b-1057-413d-8d33-434a580852dc");
  localStorage.setItem("ClientSecretKey", "7fca3040-6820-49ea-bcfe-f6521329ebde");
  localStorage.setItem("EENumber1", "000001")
  localStorage.setItem("EENumber2", "000002")
  localStorage.setItem("EENumber3", "000003")

