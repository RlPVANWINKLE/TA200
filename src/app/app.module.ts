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
const routes:Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'comm', component: CommComponent},
  {path: 'main', component: MainComponent},
  {path: 'ftwebster', component: FTWebsterComponent},
  {path: 'users/manage', component: ManageComponent},
  {path: 'users/manage/edit', component: EditUserComponent}
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
    FTWebsterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
