import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexMainNavComponent } from './components/index-main-nav/index-main-nav.component';
import { IndexMainSliderComponent } from './components/index-main-slider/index-main-slider.component';
import { IndexReservationComponent } from './components/index-reservation/index-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexMainNavComponent,
    IndexMainSliderComponent,
    IndexReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
