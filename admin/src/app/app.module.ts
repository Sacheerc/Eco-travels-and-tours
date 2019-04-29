import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

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

// Import services
import { LoginService } from './services/login.service';
import { AuthGuard } from './guard/auth.guard';
import { AuthLoginGuard } from './guard/auth-login.guard';


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
    PackagesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService,AuthGuard,AuthLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
