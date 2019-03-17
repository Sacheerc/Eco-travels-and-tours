import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexMainNavComponent } from './components/index-main-nav/index-main-nav.component';
import { IndexMainSliderComponent } from './components/index-main-slider/index-main-slider.component';
import { IndexReservationComponent } from './components/index-reservation/index-reservation.component';
import { IndexServicesComponent } from './components/index-services/index-services.component';
import { IndexDestinationsComponent } from './components/index-destinations/index-destinations.component';
import { IndexAdvertisementComponent } from './components/index-advertisement/index-advertisement.component';
import { IndexHotelsComponent } from './components/index-hotels/index-hotels.component';
import { IndexReviewsComponent } from './components/index-reviews/index-reviews.component';
import { IndexPlacesComponent } from './components/index-places/index-places.component';
import { IndexSubscribeComponent } from './components/index-subscribe/index-subscribe.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToursComponent } from './pages/tours/tours.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderImageComponent } from './pages/tours/components/header-image/header-image.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexMainNavComponent,
    IndexMainSliderComponent,
    IndexReservationComponent,
    IndexServicesComponent,
    IndexDestinationsComponent,
    IndexAdvertisementComponent,
    IndexHotelsComponent,
    IndexReviewsComponent,
    IndexPlacesComponent,
    IndexSubscribeComponent,
    FooterComponent,
    ToursComponent,
    IndexComponent,
    HeaderImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
