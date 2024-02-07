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
import { UserroleComponent } from './pages/userrole/userrole.component';
import { EnrollerComponent } from './pages/userrole/enroller/enroller.component';
import { AdminComponent } from './pages/userrole/admin/admin.component';
import { UserdefinedroleComponent } from './pages/userrole/userdefinedrole/userdefinedrole.component';
import { LockscreenComponent } from './pages/lockscreen/lockscreen.component';
import { ListitemswitchComponent } from './pages/listitemswitch/listitemswitch.component';
import { PersonalizeComponent } from './pages/personalize/personalize.component';
import { UserinterfaceComponent } from './pages/personalize/userinterface/userinterface.component';
import { VoiceComponent } from './pages/personalize/voice/voice.component';
import { BellschedulesComponent } from './pages/personalize/bellschedules/bellschedules.component';
import { PunchstateoptionsComponent } from './pages/personalize/punchstateoptions/punchstateoptions.component';
import { ShortcutkeymappingsComponent } from './pages/personalize/shortcutkeymappings/shortcutkeymappings.component';
import { BackdoorpromptComponent } from './pages/lockscreen/backdoorprompt/backdoorprompt.component';
import { RestartComponent } from './pages/restart/restart.component';
const routes:Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'userrole', component: UserroleComponent},
  {path: 'enroller', component: EnrollerComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user-defined-role', component: UserdefinedroleComponent},
  {path: 'comm', component: CommComponent},
  {path: 'ethernet', component: EthernetComponent},
  {path: 'serial-comm', component: SerialcommComponent},
  {path: 'pc-connection', component: PcconnectionComponent},
  {path: 'wireless-network', component: WirelessnetworkComponent},
  {path: 'cloud-server-setting', component: CloudserversettingComponent},
  {path: 'system', component: SystemComponent},
  {path: 'datetime', component: DatetimeComponent},
  {path: 'attendance', component: AttendanceComponent},
  {path: 'fingerprint', component: FingerprintComponent},
  {path: 'reset', component: ResetComponent},
  // {path: 'usbupgrade', component: UsbupgradeComponent},
  {path: 'main', component: MainComponent},
  {path: '', component: LockscreenComponent},
  {path: 'ftwebster', component: FTWebsterComponent},
  {path: 'users/manage', component: ManageComponent},
  {path: 'users/manage/edit', component: EditUserComponent},
  {path: 'personalize', component: PersonalizeComponent},  
  {path: 'user-interface', component: UserinterfaceComponent},  
  {path: 'voice', component: VoiceComponent},  
  {path: 'bell-schedules', component: BellschedulesComponent},  
  {path: 'punch-state-options', component: PunchstateoptionsComponent},  
  {path: 'shortcut-key-mappings', component: ShortcutkeymappingsComponent}, 
  {path: 'backdoor-prompt', component: BackdoorpromptComponent}, 
  {path: 'clock-restart', component: RestartComponent}, 

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
    UserroleComponent,
    EnrollerComponent,
    AdminComponent,
    UserdefinedroleComponent,
    LockscreenComponent,
    ListitemswitchComponent,
    PersonalizeComponent,
    UserinterfaceComponent,
    VoiceComponent,
    BellschedulesComponent,
    PunchstateoptionsComponent,
    ShortcutkeymappingsComponent,
    BackdoorpromptComponent,
    RestartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
