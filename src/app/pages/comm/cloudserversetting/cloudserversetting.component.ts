import { Component } from '@angular/core';

@Component({
  selector: 'app-cloudserversetting',
  templateUrl: './cloudserversetting.component.html',
  styleUrls: ['./cloudserversetting.component.scss']
})
export class CloudserversettingComponent {
  ServerAddress = localStorage.getItem("URLAddress");
}
