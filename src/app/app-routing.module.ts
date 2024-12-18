import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddUserComponent } from './addUser/addUser.component';
import { ViewNotificationsComponent } from './view-notifications/view-notifications.component';
import { PoliceComponent } from './police/police.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { FirefighterComponent } from './firefighter/firefighter.component';
import { ViewLogsComponent } from './view-logs/view-logs.component';

const routes: Routes =
  [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'adduser', component: AddUserComponent },
    { path: 'view-notifications', component: ViewNotificationsComponent },
    { path: 'police', component: PoliceComponent },
    { path: 'ambulance', component: AmbulanceComponent },
    { path: 'firefighter', component: FirefighterComponent },
    { path: 'view-logs', component: ViewLogsComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
