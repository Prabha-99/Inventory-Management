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

import { ShowroomComponent } from './showroom/showroom.component';
import { DesignerComponent } from './designer/designer.component';
import { PurchaseCoordinatorDashComponent } from './purchase-coordinator-dash/purchase-coordinator-dash.component';
import { GetUserComponent } from './get-user/get-user.component';
import { StockKeeperDashComponent } from './stock-keeper-dash/stock-keeper-dash.component';
import { StockKeeperNavComponent } from './stock-keeper-nav/stock-keeper-nav.component';
import { StockKeeperProfileComponent } from './stock-keeper-profile/stock-keeper-profile.component';
import { StockKeeperSidebarComponent } from './stock-keeper-sidebar/stock-keeper-sidebar.component';
import { GINReportsComponent } from './gin-reports/gin-reports.component';
import { GRNReportsComponent } from './grn-reports/grn-reports.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateOneUserComponent } from './update-one-user/update-one-user.component';
import { StockKeeperGINService } from './stock-keeper-order-reports/stock-keeper-gin.service';
import { StockKeeperOrderReportsComponent } from './stock-keeper-order-reports/stock-keeper-order-reports.component';
import { StockKeeperGRNService } from './stock-keeper-order-reports-grn/stock-keeper-grn.service';
// import { StockKeeperOrderReportsComponentComponent } from './stock-keeper-order-reports-component/stock-keeper-order-reports-component.component';
import { PurchaseCoordinatorSideComponent } from './purchase-coordinator-side/purchase-coordinator-side.component';
import { PurchaseCoordinatorNavComponent } from './purchase-coordinator-nav/purchase-coordinator-nav.component';
import { PurchaseCoordinatorProductComponent } from './purchase-coordinator-product/purchase-coordinator-product.component';
import { PurchaseCoordinatorProfileComponent } from './purchase-coordinator-profile/purchase-coordinator-profile.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { InventoryAdSellOrderComponent } from './inventory-ad-sell-order/inventory-ad-sell-order.component';
import { InventoryAdPurchaseOrderComponent } from './inventory-ad-purchase-order/inventory-ad-purchase-order.component';
import { StockManagerPurchaseOrderComponent } from './stock-manager-purchase-order/stock-manager-purchase-order.component';
import { StockManagerSellOrderComponent } from './stock-manager-sell-order/stock-manager-sell-order.component';
import { PurchaseCoordinatorSellOrderComponent } from './purchase-coordinator-sell-order/purchase-coordinator-sell-order.component';
import { PurchaseCoordinatorPurchaseOrderComponent } from './purchase-coordinator-purchase-order/purchase-coordinator-purchase-order.component';




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
  {path:"showroom",component:ShowroomComponent},
  { path: 'designer', component: DesignerComponent },
  {path:"purchase-coordinator-dash",component:PurchaseCoordinatorDashComponent},
  {path:"get-user",component:GetUserComponent},

  {path:"stock-keeper-dash",component:StockKeeperDashComponent},
  {path:"stock-keeper-nav",component:StockKeeperNavComponent},
  {path:"stock-keeper-profile",component:StockKeeperProfileComponent},
  {path:"stock-keeper-sidebar",component:StockKeeperSidebarComponent},
  {path:"gin-reports",component:GINReportsComponent},
  {path:"grn-reports",component:GRNReportsComponent},
  {path:"delete-user",component:DeleteUserComponent},
  // {path:"stock-keeper-order-reports-component",component:StockKeeperOrderReportsComponentComponent}
  {path:"stock-keeper-order-reports",component:StockKeeperOrderReportsComponent},
  {path:"stock-keeper-order-reports-grn",component:StockKeeperGRNService},

  {path:"purchase-coordinator-side",component:PurchaseCoordinatorSideComponent},
  {path:"purchase-coordinator-nav",component:PurchaseCoordinatorNavComponent},
  {path:"purchase-coordinator-product",component:PurchaseCoordinatorProductComponent},
  {path:"purchase-coordinator-profile",component:PurchaseCoordinatorProfileComponent},
  {path:"update-user/:id",component:UpdateOneUserComponent},
  {path:"user-update",component:UserUpdateComponent},
  {path:"inventory-ad-sell-order",component:InventoryAdSellOrderComponent},
  {path:"inventory-ad-purchase-order",component:InventoryAdPurchaseOrderComponent},
  {path:"stock-manager-purchase-order",component:StockManagerPurchaseOrderComponent},
  {path:"stock-manager-sell-order",component:StockManagerSellOrderComponent},
  {path:"purchase-coordinator-sell-order",component:PurchaseCoordinatorSellOrderComponent},
  {path:"purchase-coordinator-purchase-order",component:PurchaseCoordinatorPurchaseOrderComponent},
  { path: '', redirectTo: '/product', pathMatch: 'full' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule],


})
export class AppRoutingModule { }

