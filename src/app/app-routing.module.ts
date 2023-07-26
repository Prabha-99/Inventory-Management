import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
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
import { StockKeeperOrderReportsComponent } from './stock-keeper-order-reports/stock-keeper-order-reports.component';
import { StockKeeperGRNService } from './stock-keeper-order-reports-grn/stock-keeper-grn.service';
// import { StockKeeperOrderReportsComponentComponent } from './stock-keeper-order-reports-component/stock-keeper-order-reports-component.component';
import { PurchaseCoordinatorSideComponent } from './purchase-coordinator-side/purchase-coordinator-side.component';
import { PurchaseCoordinatorNavComponent } from './purchase-coordinator-nav/purchase-coordinator-nav.component';
import { PurchaseCoordinatorProductComponent } from './purchase-coordinator-product/purchase-coordinator-product.component';
import { PurchaseCoordinatorProfileComponent } from './purchase-coordinator-profile/purchase-coordinator-profile.component';

import { StockKeeperOrderReportsGRNComponent } from './stock-keeper-order-reports-grn/stock-keeper-order-reports-grn.component';
import { GenerateGINComponent } from './generate-gin/generate-gin.component';
import { GenerateGRNComponent } from './generate-grn/generate-grn.component';

import { UserUpdateComponent } from './user-update/user-update.component';
import { InventoryAdSellOrderComponent } from './inventory-ad-sell-order/inventory-ad-sell-order.component';
import { InventoryAdPurchaseOrderComponent } from './inventory-ad-purchase-order/inventory-ad-purchase-order.component';
import { StockManagerPurchaseOrderComponent } from './stock-manager-purchase-order/stock-manager-purchase-order.component';
import { StockManagerSellOrderComponent } from './stock-manager-sell-order/stock-manager-sell-order.component';
import { PurchaseCoordinatorSellOrderComponent } from './purchase-coordinator-sell-order/purchase-coordinator-sell-order.component';
import { PurchaseCoordinatorPurchaseOrderComponent } from './purchase-coordinator-purchase-order/purchase-coordinator-purchase-order.component';
import { ForecastingDashboardComponent } from './forecasting-dashboard/forecasting-dashboard.component';
import { ForecastingChartComponent } from './forecasting-chart/forecasting-chart.component';

import { DesigerViewFilesComponent } from './desiger-view-files/desiger-view-files.component';
import { DesignerDashComponent } from './designer-dash/designer-dash.component';
import { DesignerSideBarComponent } from './designer-side-bar/designer-side-bar.component';
import { DesignerDeQuantityComponent } from './designer-de-quantity/designer-de-quantity.component';
import { DesignerBillSendComponent } from './designer-bill-send/designer-bill-send.component';

import { ShowroomDashComponent } from './showroom-dash/showroom-dash.component';
import { ShowroomSideBarComponent } from './showroom-side-bar/showroom-side-bar.component';
import { ShowroomBillViewComponent } from './showroom-bill-view/showroom-bill-view.component';
import { ShowroomSendFileComponent } from './showroom-send-file/showroom-send-file.component';

import { ShowroomProfileComponent } from './showroom-profile/showroom-profile.component';

import { DesignerProfileComponent } from './designer-profile/designer-profile.component';


import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthGuardService } from './auth-guard.service';
import { RouteResolverService } from './route-resolver.service';
import { InventoryBackupComponent } from './inventory-backup/inventory-backup.component';
import { StockReportsComponent } from './stock-reports/stock-reports.component';
import { DesignerCreateGinComponent } from './designer-create-gin/designer-create-gin.component';

import { UserProfileComponent } from './user-profile/user-profile.component';

import { PurchaseCoordinatorForecatingChartComponent } from './purchase-coordinator-forecating-chart/purchase-coordinator-forecating-chart.component';
import { StockManagerForecatingChartComponent } from './stock-manager-forecating-chart/stock-manager-forecating-chart.component';
import { StockManagerForecastingDashComponent } from './stock-manager-forecasting-dash/stock-manager-forecasting-dash.component';
import { PurchaseCoordinatorForecastingDashComponent } from './purchase-coordinator-forecasting-dash/purchase-coordinator-forecasting-dash.component';
import { StockKeeperGinComponent } from './stock-keeper-gin/stock-keeper-gin.component';





const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER'] },resolve: { userRole: RouteResolverService }},
  {path:"navbar",component:NavbarComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"billing",component:BillingComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['INVENTORY_ADMIN','DESIGNER','PURCHASE_COORDINATOR','STOCK_MANAGER'] },resolve: { userRole: RouteResolverService }},
  {path:"billingsend",component:BillingSendComponent},
  {path:"billingview",component:BillingViewComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['INVENTORY_ADMIN','DESIGNER','PURCHASE_COORDINATOR','STOCK_MANAGER'] },resolve: { userRole: RouteResolverService }},
  {path:"reports",component:ReportsComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER','INVENTORY_ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"inventory-ad-dash",component: InventoryAdDashComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['INVENTORY_ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"inventory-ad-addproduct",component: InventoryAdAddproductComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['INVENTORY_ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"inventory-ad-profile",component:InventoryAdProfileComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['INVENTORY_ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"stock-manager-dash",component:StockManagerDashComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_MANAGER'] },resolve: { userRole: RouteResolverService }},
  {path:"stock-manager-profile",component:StockManagerProfileComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_MANAGER'] },resolve: { userRole: RouteResolverService }},
  {path:"stock-manager-product",component:StockManagerProductComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_MANAGER'] },resolve: { userRole: RouteResolverService }},
  {path:"billingview",component:BillingViewComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER'] },resolve: { userRole: RouteResolverService }},
  {path:"registration",component:RegistrationComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"system-admin-nav",component:SystemAdminNavComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"system-admin-side",component:SystemAdminSideComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"system-admin-dash",component:SystemAdminDashComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"get-user-details",component:GetUserDetailsComponent, canActivate: [AuthGuardService], data: { allowedRoles: [''] },resolve: { userRole: RouteResolverService }},
  {path:"showroom",component:ShowroomComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['SHOWROOM_MANAGER'] },resolve: { userRole: RouteResolverService }},
  {path: 'designer', component: DesignerComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['DESIGNER'] },resolve: { userRole: RouteResolverService } },
  {path:"purchase-coordinator-dash",component:PurchaseCoordinatorDashComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['PURCHASE_COORDINATOR'] },resolve: { userRole: RouteResolverService }},
  {path:"get-user",component:GetUserComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},

  {path:"stock-keeper-dash",component:StockKeeperDashComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER'] },resolve: { userRole: RouteResolverService }},
  {path:"stock-keeper-nav",component:StockKeeperNavComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER'] },resolve: { userRole: RouteResolverService }},
  {path:"stock-keeper-profile",component:StockKeeperProfileComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER'] },resolve: { userRole: RouteResolverService }},
  {path:"stock-keeper-sidebar",component:StockKeeperSidebarComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER'] },resolve: { userRole: RouteResolverService }},
  {path:"gin-reports",component:GINReportsComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER','INVENTORY_ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"grn-reports",component:GRNReportsComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER','INVENTORY_ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"delete-user",component:DeleteUserComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  // {path:"stock-keeper-order-reports-component",component:StockKeeperOrderReportsComponentComponent}

  {path:"stock-keeper-order-reports",component:StockKeeperOrderReportsComponent},

  {path:"stock-keeper-order-reports-grn",component:StockKeeperOrderReportsGRNComponent},


  {path:"stock-keeper-order-reports-grn",component:StockKeeperGRNService},


  {path:"purchase-coordinator-side",component:PurchaseCoordinatorSideComponent},
  {path:"purchase-coordinator-nav",component:PurchaseCoordinatorNavComponent},
  {path:"purchase-coordinator-product",component:PurchaseCoordinatorProductComponent},
  {path:"purchase-coordinator-profile",component:PurchaseCoordinatorProfileComponent},


  {path:"stock-keeper-order-reports",component:StockKeeperOrderReportsComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER'] },resolve: { userRole: RouteResolverService }},

  {path:"stock-keeper-order-reports-grn",component:StockKeeperOrderReportsGRNComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER'] },resolve: { userRole: RouteResolverService }},


  {path:"stock-keeper-order-reports-grn",component:StockKeeperGRNService, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER'] },resolve: { userRole: RouteResolverService }},


  {path:"purchase-coordinator-side",component:PurchaseCoordinatorSideComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['PURCHASE_COORDINATOR'] },resolve: { userRole: RouteResolverService }},
  {path:"purchase-coordinator-nav",component:PurchaseCoordinatorNavComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['PURCHASE_COORDINATOR'] },resolve: { userRole: RouteResolverService }},
  {path:"purchase-coordinator-product",component:PurchaseCoordinatorProductComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['PURCHASE_COORDINATOR'] },resolve: { userRole: RouteResolverService }},
  {path:"purchase-coordinator-profile",component:PurchaseCoordinatorProfileComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['PURCHASE_COORDINATOR'] },resolve: { userRole: RouteResolverService }},



  {path:"generate-GIN",component:GenerateGINComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER','DESIGNER'] },resolve: { userRole: RouteResolverService }},

  {path:"generate-GRN",component:GenerateGRNComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER'] },resolve: { userRole: RouteResolverService }},



  {path:"get-user",component:GetUserComponent},
  {path:"user-update",component:UserUpdateComponent},
  {path:"inventory-ad-sell-order",component:InventoryAdSellOrderComponent},
  {path:"inventory-ad-purchase-order",component:InventoryAdPurchaseOrderComponent},
  {path:"stock-manager-purchase-order",component:StockManagerPurchaseOrderComponent},
  {path:"stock-manager-sell-order",component:StockManagerSellOrderComponent},
  {path:"purchase-coordinator-sell-order",component:PurchaseCoordinatorSellOrderComponent},
  {path:"purchase-coordinator-purchase-order",component:PurchaseCoordinatorPurchaseOrderComponent},
  {path:"forecasting-dashboard",component:ForecastingDashboardComponent},
  {path:"forecasting-chart",component:ForecastingChartComponent},
  {path:"desiger-view-files",component:DesigerViewFilesComponent},
  {path: "designer-dash",component:DesignerDashComponent},
  {path: "designer-side-bar",component:DesignerSideBarComponent},
  {path: "designer-de-quantity",component:DesignerDeQuantityComponent},
  {path: "designer-bill-send",component:DesignerBillSendComponent},



  {path:"get-user",component:GetUserComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},

  // {path:"update-user/:id",component:UpdateOneUserComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"user-update",component:UserUpdateComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"inventory-ad-sell-order",component:InventoryAdSellOrderComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['INVENTORY_ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"inventory-ad-purchase-order",component:InventoryAdPurchaseOrderComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['INVENTORY_ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"stock-manager-purchase-order",component:StockManagerPurchaseOrderComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_MANAGER'] },resolve: { userRole: RouteResolverService }},
  {path:"stock-manager-sell-order",component:StockManagerSellOrderComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_MANAGER'] },resolve: { userRole: RouteResolverService }},
  {path:"purchase-coordinator-sell-order",component:PurchaseCoordinatorSellOrderComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['PURCHASE_COORDINATOR'] },resolve: { userRole: RouteResolverService }},
  {path:"purchase-coordinator-purchase-order",component:PurchaseCoordinatorPurchaseOrderComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['PURCHASE_COORDINATOR'] },resolve: { userRole: RouteResolverService }},
  {path:"forecasting-dashboard",component:ForecastingDashboardComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['INVENTORY_ADMIN','STOCK_MANAGER','PURCHASE_COORDINATOR'] },resolve: { userRole: RouteResolverService }},
  {path:"forecasting-chart",component:ForecastingChartComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['INVENTORY_ADMIN','STOCK_MANAGER','PURCHASE_COORDINATOR'] },resolve: { userRole: RouteResolverService }},
  {path:"unauthorized",component:UnauthorizedComponent},
  {path: "showroom-dash",component:ShowroomDashComponent},
  {path: "showroom-side-bar",component:ShowroomSideBarComponent},
  {path: "showroom-bill-view",component:ShowroomBillViewComponent},
  {path: "showroom-send-file",component:ShowroomSendFileComponent},

  {path: "showroom-profile",component:ShowroomProfileComponent},
  {path: "designer-profile",component:DesignerProfileComponent},
  {path: "showroom-profile",component:ShowroomProfileComponent},
  {path: "designer-profile",component:DesignerProfileComponent},
  {path: "designer-profile",component:DesignerProfileComponent},


  {path: "designer-create-gin",component:DesignerCreateGinComponent},




  {path: "stock-reports", component:StockReportsComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER','INVENTORY_ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path: "inventory-backup",component:InventoryBackupComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['INVENTORY_ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path: "user-profile",component:UserProfileComponent},

  {path: "purchase-coordinator-forecasting-chart",component:PurchaseCoordinatorForecatingChartComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['PURCHASE_COORDINATOR'] },resolve: { userRole: RouteResolverService }},
  {path: "stock-manager-forecasting-chart",component:StockManagerForecatingChartComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_MANAGER'] },resolve: { userRole: RouteResolverService }},
  {path: "stock-manager-forecasting-dash",component:StockManagerForecastingDashComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_MANAGER'] },resolve: { userRole: RouteResolverService }},
  {path: "purchase-coordinator-forecasting-dash",component:PurchaseCoordinatorForecastingDashComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['PURCHASE_COORDINATOR'] },resolve: { userRole: RouteResolverService }},
  {path: "stock-keeper-gin",component:StockKeeperGinComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STOCK_KEEPER'] },resolve: { userRole: RouteResolverService }}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule { }

