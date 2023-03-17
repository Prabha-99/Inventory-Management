import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StockManagerNavComponent } from './stock-manager-nav/stock-manager-nav.component';
import { StockManagerSideComponent } from './stock-manager-side/stock-manager-side.component';
import { StockManagerDashComponent } from './stock-manager-dash/stock-manager-dash.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    StockManagerNavComponent,
    StockManagerSideComponent,
    StockManagerDashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
