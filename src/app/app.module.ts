import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BillingComponent } from './billing/billing.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxPrintModule } from 'ngx-print';
import { BillingSendComponent } from './billing-send/billing-send.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReportsComponent } from './reports/reports.component';
import { OrderReportsComponent } from './order-reports/order-reports.component';
import { InventoryAdNavComponent } from './inventory-ad-nav/inventory-ad-nav.component';
import { InventoryAdSideBarComponent } from './inventory-ad-side-bar/inventory-ad-side-bar.component';
import { InventoryAdDashComponent } from './inventory-ad-dash/inventory-ad-dash.component';
import { InventoryAdAddproductComponent } from './inventory-ad-addproduct/inventory-ad-addproduct.component';
import { InventoryAdProfileComponent } from './inventory-ad-profile/inventory-ad-profile.component';
import { StockManagerNavComponent } from './stock-manager-nav/stock-manager-nav.component';
import { StockManagerSideComponent } from './stock-manager-side/stock-manager-side.component';
import { StockManagerDashComponent } from './stock-manager-dash/stock-manager-dash.component';
import { StockManagerProfileComponent } from './stock-manager-profile/stock-manager-profile.component';
import { StockManagerProductComponent } from './stock-manager-product/stock-manager-product.component';
import { LoginComponent } from './login/login.component';
import { BillingViewComponent } from './billing-view/billing-view.component';
import { InventoryAdProductPopupComponent } from './inventory-ad-product-popup/inventory-ad-product-popup.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from  '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { StockManagerProductPopupComponent } from './stock-manager-product-popup/stock-manager-product-popup.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';





@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    BillingComponent,
    BillingSendComponent,
    ReportsComponent,
    OrderReportsComponent,
    InventoryAdNavComponent,
    InventoryAdSideBarComponent,
    InventoryAdDashComponent,
    InventoryAdAddproductComponent,
    InventoryAdProfileComponent,
    StockManagerNavComponent,
    StockManagerSideComponent,
    StockManagerDashComponent,
    StockManagerProfileComponent,
    StockManagerProductComponent,
    LoginComponent,
    BillingViewComponent,
    InventoryAdProductPopupComponent,
    StockManagerProductPopupComponent
 

 

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    HttpClientModule,
    FormsModule,
    ScheduleModule, RecurrenceEditorModule, CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
