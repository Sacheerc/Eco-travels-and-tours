import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import {  GuidesComponent } from './pages/guides/guides.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { PackagesComponent } from './pages/packages/packages.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"",component:LoginComponent},
  {path:"guides",component:GuidesComponent},
  {path:"customers",component:CustomersComponent},
  {path:"packages",component:PackagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
