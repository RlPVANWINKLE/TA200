import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { CommComponent } from './pages/comm/comm.component';
import { MainComponent } from './pages/main/main.component';
import { FTWebsterComponent } from './pages/ftwebster/ftwebster.component';
import { ManageComponent } from './pages/users/manage/manage.component';
import { EditUserComponent } from './pages/users/manage/edit-user/edit-user.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'comm', component: CommComponent},
  {path: 'main', component: MainComponent},
  {path: 'ftwebster', component: FTWebsterComponent},
  {path: 'users/manage', component: ManageComponent},
  {path: 'users/manage/edit', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
