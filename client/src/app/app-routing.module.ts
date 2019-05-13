import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToursComponent } from './pages/tours/tours.component';
import { IndexComponent } from './pages/index/index.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TourPlacesComponent } from './pages/tour-places/tour-places.component';
import { QaforumComponent } from './pages/qaforum/qaforum.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './guard/auth.guard';
import { GuidesComponent } from './pages/guides/guides.component';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"tours",component:ToursComponent},
  {path:"hotels",component:HotelsComponent},
  {path:"services",component:ServicesComponent},
  {path:"about",component:AboutusComponent},
  {path:"contact",component:ContactComponent},
  {path:"tourplaces/:id",component:TourPlacesComponent},
  {path:"tours/:id",component:ToursComponent},
  {path:"qaforum",component:QaforumComponent},
  {path:"profile",component:ProfileComponent},
  {path:"profile/:id",component:ProfileComponent},
  {path:"guides",component:GuidesComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
