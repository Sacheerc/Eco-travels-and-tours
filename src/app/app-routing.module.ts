import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToursComponent } from './pages/tours/tours.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"tours",component:ToursComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
