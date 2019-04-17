import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { GuidesComponent } from './pages/guides/guides.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"",component:LoginComponent},
  {path:"guides",component:GuidesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
