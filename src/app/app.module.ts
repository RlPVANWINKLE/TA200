import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { MainComponent } from './pages/main/main.component';
import { ManageComponent } from './pages/users/manage/manage.component';
import { ScreenComponent } from './pages/screen/screen.component';
import { ItemComponent } from './pages/item/item.component';
import { EditUserComponent } from './pages/users/manage/edit-user/edit-user.component';
import { CommComponent } from './pages/comm/comm.component';
import { FTWebsterComponent } from './pages/ftwebster/ftwebster.component';
import { ListItemComponent } from './pages/list-item/list-item.component';
import { ListItemNoIconComponent } from './pages/list-item-no-icon/list-item-no-icon.component';
import { EthernetComponent } from './pages/comm/ethernet/ethernet.component';
import { SerialcommComponent } from './pages/comm/serialcomm/serialcomm.component';
import { PcconnectionComponent } from './pages/comm/pcconnection/pcconnection.component';
import { WirelessnetworkComponent } from './pages/comm/wirelessnetwork/wirelessnetwork.component';
import { CloudserversettingComponent } from './pages/comm/cloudserversetting/cloudserversetting.component';
import { SystemComponent } from './pages/system/system.component';
import { DatetimeComponent } from './pages/system/datetime/datetime.component';
import { AttendanceComponent } from './pages/system/attendance/attendance.component';
import { FingerprintComponent } from './pages/system/fingerprint/fingerprint.component';
import { ResetComponent } from './pages/system/reset/reset.component';
import { UsbupgradeComponent } from './pages/system/usbupgrade/usbupgrade.component';
const routes:Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'comm', component: CommComponent},
  {path: 'ethernet', component: EthernetComponent},
  {path: 'serialcomm', component: SerialcommComponent},
  {path: 'pcconnection', component: PcconnectionComponent},
  {path: 'wirelessnetwork', component: WirelessnetworkComponent},
  {path: 'cloudserversetting', component: CloudserversettingComponent},
  {path: 'system', component: SystemComponent},
  {path: 'datetime', component: DatetimeComponent},
  {path: 'attendance', component: AttendanceComponent},
  {path: 'fingerprint', component: FingerprintComponent},
  {path: 'reset', component: ResetComponent},
  // {path: 'usbupgrade', component: UsbupgradeComponent},
  {path: '', component: MainComponent},
  {path: 'ftwebster', component: FTWebsterComponent},
  {path: 'users/manage', component: ManageComponent},
  {path: 'users/manage/edit', component: EditUserComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MainComponent,
    ManageComponent,
    ScreenComponent,
    ItemComponent,
    EditUserComponent,
    CommComponent,
    FTWebsterComponent,
    ListItemComponent,
    ListItemNoIconComponent,
    EthernetComponent,
    SerialcommComponent,
    PcconnectionComponent,
    WirelessnetworkComponent,
    CloudserversettingComponent,
    SystemComponent,
    DatetimeComponent,
    AttendanceComponent,
    FingerprintComponent,
    ResetComponent,
    UsbupgradeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
