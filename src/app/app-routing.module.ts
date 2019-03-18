import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToursComponent } from './pages/tours/tours.component';
import { IndexComponent } from './pages/index/index.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"tours",component:ToursComponent},
  {path:"hotels",component:HotelsComponent},
  {path:"services",component:ServicesComponent},
  {path:"about",component:AboutusComponent},
  {path:"contact",component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
