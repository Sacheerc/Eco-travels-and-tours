import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import {  GuidesComponent } from './pages/guides/guides.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { RegisterGuideComponent } from './pages/guides/register-guide/register-guide.component';
import { enableDebugTools } from '@angular/platform-browser';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent},
  {path:"login",component:LoginComponent},
  {path:"guides",component:GuidesComponent},
  {path:"customers",component:CustomersComponent},
  {path:"packages",component:PackagesComponent},
  {path:"regGuide", component:RegisterGuideComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
