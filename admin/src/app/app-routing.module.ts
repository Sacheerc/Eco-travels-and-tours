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


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent,canActivate:[AuthLoginGuard]},
  {path:"guides",component:GuidesComponent,canActivate:[AuthGuard]},
  {path:"customers",component:CustomersComponent,canActivate:[AuthGuard]},
  {path:"packages",component:PackagesComponent,canActivate:[AuthGuard]},
  {path:"regGuide", component:RegisterGuideComponent,canActivate:[AuthGuard]},
  {path:"reservations", component:ReservationsComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
