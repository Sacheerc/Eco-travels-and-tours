import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import {  GuidesComponent } from './pages/guides/guides.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { RegisterGuideComponent } from './pages/guides/register-guide/register-guide.component';
import { enableDebugTools } from '@angular/platform-browser';
import { AuthGuard } from './guard/auth.guard';
import { AuthLoginGuard } from './guard/auth-login.guard';
import { ReservationsComponent } from './pages/reservations/reservations.component'
import { AssignGuidesComponent } from './pages/reservations/assign-guides/assign-guides.component';
import { ImageComponent } from './pages/image/image.component';
import { GuideProfileComponent } from './pages/guides/guide-profile/guide-profile.component';
import { SendMailComponent } from './pages/guides/send-mail/send-mail.component';
import { BroadcastEmailsComponent } from './pages/guides/broadcast-emails/broadcast-emails.component';
import { AddPackageComponent } from './pages/packages/add-package/add-package.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent,canActivate:[AuthLoginGuard]},
  {path:"guides",component:GuidesComponent,canActivate:[AuthGuard]},
  {path:"qaforum",component:CustomersComponent,canActivate:[AuthGuard]},
  {path:"packages",component:PackagesComponent,canActivate:[AuthGuard]},
  {path:"regGuide", component:RegisterGuideComponent,canActivate:[AuthGuard]},
  {path:"reservations", component:ReservationsComponent,canActivate:[AuthGuard]},
  {path:"reservations/:id", component:AssignGuidesComponent,canActivate:[AuthGuard]},
  {path:"guides/profile/:id", component:GuideProfileComponent,canActivate:[AuthGuard]},
  {path:"image", component:ImageComponent,canActivate:[AuthGuard]},
  {path:"reservations/assignguides/:id", component:AssignGuidesComponent,canActivate:[AuthGuard]},
  {path:"profile/:id", component:GuideProfileComponent,canActivate:[AuthGuard]},
  {path:"profile/sendmail/:id", component:SendMailComponent, canActivate:[AuthGuard]},
  {path:"guides/broadcastEmails", component:BroadcastEmailsComponent, canActivate:[AuthGuard]},
  {path:"addPackage", component:AddPackageComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
