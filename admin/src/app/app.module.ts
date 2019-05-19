import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterGuideComponent } from './pages/guides/register-guide/register-guide.component';
import { GuidesComponent } from './pages/guides/guides.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { AssignGuidesComponent } from './pages/reservations/assign-guides/assign-guides.component';


// Import services
import { LoginService } from './services/login.service';
import { AuthGuard } from './guard/auth.guard';
import { AuthLoginGuard } from './guard/auth-login.guard';
import { ReservationsService } from './services/reservation-service/reservations.service';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { PopupModalService } from './services/popup-modals-service/popup-modal.service';
import { ViewAssignedGuideComponent } from './pages/reservations/view-assigned-guide/view-assigned-guide.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    GuidesComponent,
    RegisterGuideComponent,
    CustomersComponent,
    PackagesComponent,
    ReservationsComponent,
    AssignGuidesComponent,
    ConfirmationDialogComponent,
    ViewAssignedGuideComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  
  entryComponents: [
    ConfirmationDialogComponent,
    ViewAssignedGuideComponent
  ],

  providers: [
    LoginService,
    AuthGuard, 
    AuthLoginGuard, 
    ReservationsService,
    PopupModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
