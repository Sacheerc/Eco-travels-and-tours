import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexMainNavComponent } from './shared/components/index-main-nav/index-main-nav.component';
import { IndexMainSliderComponent } from './pages/index/components/index-main-slider/index-main-slider.component';
import { IndexReservationComponent } from './pages/index/components/index-reservation/index-reservation.component';
import { IndexServicesComponent } from './pages/index/components/index-services/index-services.component';
import { IndexDestinationsComponent } from './pages/index/components/index-destinations/index-destinations.component';
import { IndexAdvertisementComponent } from './pages/index/components/index-advertisement/index-advertisement.component';
import { IndexHotelsComponent } from './pages/index/components/index-hotels/index-hotels.component';
import { IndexReviewsComponent } from './shared/components/index-reviews/index-reviews.component';
import { IndexPlacesComponent } from './pages/index/components/index-places/index-places.component';
import { IndexSubscribeComponent } from './shared/components/index-subscribe/index-subscribe.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ToursComponent } from './pages/tours/tours.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderImageComponent } from './pages/tours/components/header-image/header-image.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { ToursToursComponent } from './pages/tours/components/tours-tours/tours-tours.component';
import { ToursSidebarComponent } from './pages/tours/components/tours-sidebar/tours-sidebar.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServicesHeaderComponent } from './pages/services/components/services-header/services-header.component';
import { ServicesServicesComponent } from './pages/services/components/services-services/services-services.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AboutusHeaderComponent } from './pages/aboutus/components/aboutus-header/aboutus-header.component';
import { AboutusContentComponent } from './pages/aboutus/components/aboutus-content/aboutus-content.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArrowUpComponent } from './shared/components/arrow-up/arrow-up.component';
import { ContactBodyComponent } from './pages/contact/components/contact-body/contact-body.component';
import { ContactHeaderComponent } from './pages/contact/components/contact-header/contact-header.component';
import { HotelsHeaderComponent } from './pages/hotels/components/hotels-header/hotels-header.component';
import { HotelsHotelsComponent } from './pages/hotels/components/hotels-hotels/hotels-hotels.component';
import { HotelsSidebarComponent } from './pages/hotels/components/hotels-sidebar/hotels-sidebar.component';
import { TourPlacesComponent } from './pages/tour-places/tour-places.component';
import { QaforumComponent } from './pages/qaforum/qaforum.component';
import { QaforumBodyComponent } from './pages/qaforum/components/qaforum-body/qaforum-body.component';
import { QaforumHeaderComponent } from './pages/qaforum/components/qaforum-header/qaforum-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TourPlacesSidebarComponent } from './pages/tour-places/components/tour-places-sidebar/tour-places-sidebar.component';

// Import services
import { TourPackagesService } from './services/tours/tour-packages.service';

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
    HotelsComponent,
    ToursToursComponent,
    ToursSidebarComponent,
    ServicesComponent,
    ServicesHeaderComponent,
    ServicesServicesComponent,
    AboutusComponent,
    AboutusHeaderComponent,
    AboutusContentComponent,
    ContactComponent,
    ArrowUpComponent,
    ContactBodyComponent,
    ContactHeaderComponent,
    HotelsHeaderComponent,
    HotelsHotelsComponent,
    HotelsSidebarComponent,
    TourPlacesComponent,
    QaforumComponent,
    QaforumBodyComponent,
    QaforumHeaderComponent,
    TourPlacesSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TourPackagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
