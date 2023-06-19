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
import { LoginComponent } from './login/login.component';
import { BillingViewComponent } from './billing-view/billing-view.component';
import { RegistrationComponent } from './registration/registration.component';
import { SystemAdminNavComponent } from './system-admin-nav/system-admin-nav.component';
import { SystemAdminSideComponent } from './system-admin-side/system-admin-side.component';
import { SystemAdminDashComponent } from './system-admin-dash/system-admin-dash.component';
import { GetUserDetailsComponent } from './get-user-details/get-user-details.component';
import { PurchaseCoordinatorDashComponent } from './purchase-coordinator-dash/purchase-coordinator-dash.component';




const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"billing",component:BillingComponent},
  {path:"billingsend",component:BillingSendComponent},
  {path:"billingview",component:BillingViewComponent},
  {path:"reports",component:ReportsComponent},
  {path:"orderreports",component:OrderReportsComponent},
  {path:"inventory-ad-dash",component: InventoryAdDashComponent},
  {path:"inventory-ad-addproduct",component: InventoryAdAddproductComponent},
  {path:"inventory-ad-profile",component:InventoryAdProfileComponent},
  {path:"stock-manager-dash",component:StockManagerDashComponent},
  {path:"stock-manager-profile",component:StockManagerProfileComponent},
  {path:"stock-manager-product",component:StockManagerProductComponent},
  {path:"billingview",component:BillingViewComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"system-admin-nav",component:SystemAdminNavComponent},
  {path:"system-admin-side",component:SystemAdminSideComponent},
  {path:"system-admin-dash",component:SystemAdminDashComponent},
  {path:"get-user-details",component:GetUserDetailsComponent},
  {path:"purchase-coordinator-dash",component:PurchaseCoordinatorDashComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 

})
export class AppRoutingModule { }

