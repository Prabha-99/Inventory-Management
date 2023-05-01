import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderReportsComponent } from './order-reports/order-reports.component';
import { ReportsComponent } from './reports/reports.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BillingComponent } from './billing/billing.component';
import { BillingSendComponent } from './billing-send/billing-send.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InventoryAdDashComponent } from './inventory-ad-dash/inventory-ad-dash.component';
import { InventoryAdAddproductComponent } from './inventory-ad-addproduct/inventory-ad-addproduct.component';
import { InventoryAdProfileComponent } from './inventory-ad-profile/inventory-ad-profile.component';
import { StockManagerDashComponent } from './stock-manager-dash/stock-manager-dash.component';
import { StockManagerProfileComponent } from './stock-manager-profile/stock-manager-profile.component';
import { StockManagerProductComponent } from './stock-manager-product/stock-manager-product.component';



const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"sidebar",component:SidebarComponent},
  
  {path:"billing",component:BillingComponent},
  {path:"billingsend",component:BillingSendComponent},

  {path:"reports",component:ReportsComponent},
  {path:"orderreports",component:OrderReportsComponent},

  {path:"inventory-ad-dash",component: InventoryAdDashComponent},
  {path:"inventory-ad-addproduct",component: InventoryAdAddproductComponent},
  {path:"inventory-ad-profile",component:InventoryAdProfileComponent},

  {path:"stock-manager-dash",component:StockManagerDashComponent},
  {path:"stock-manager-profile",component:StockManagerProfileComponent},
  {path:"stock-manager-product",component:StockManagerProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 

})
export class AppRoutingModule { }

