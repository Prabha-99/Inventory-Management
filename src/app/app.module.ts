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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { SystemAdminNavComponent } from './system-admin-nav/system-admin-nav.component';
import { SystemAdminSideComponent } from './system-admin-side/system-admin-side.component';
import { SystemAdminDashComponent } from './system-admin-dash/system-admin-dash.component';
import { InventoryAdDeletePopComponent } from './inventory-ad-delete-pop/inventory-ad-delete-pop.component';
import { GetUserDetailsComponent } from './get-user-details/get-user-details.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { PurchaseCoordinatorDashComponent } from './purchase-coordinator-dash/purchase-coordinator-dash.component';
import { PurchaseCoordinatorSideComponent } from './purchase-coordinator-side/purchase-coordinator-side.component';
import { PurchaseCoordinatorNavComponent } from './purchase-coordinator-nav/purchase-coordinator-nav.component';
import { PurchaseCoordinatorProductComponent } from './purchase-coordinator-product/purchase-coordinator-product.component';
import { PurchaseCoordinatorProductPopupComponent } from './purchase-coordinator-product-popup/purchase-coordinator-product-popup.component';
import { PurchaseCoordinatorProfileComponent } from './purchase-coordinator-profile/purchase-coordinator-profile.component';
import { GetUserComponent } from './get-user/get-user.component';
import { DesignerComponent } from './designer/designer.component';




// import { OrderComponent } from './order/order.component';


import { StockKeeperDashComponent } from './stock-keeper-dash/stock-keeper-dash.component';
import { StockKeeperNavComponent } from './stock-keeper-nav/stock-keeper-nav.component';
import { StockKeeperProfileComponent } from './stock-keeper-profile/stock-keeper-profile.component';
import { StockKeeperSidebarComponent } from './stock-keeper-sidebar/stock-keeper-sidebar.component';
import { GINReportsComponent } from './gin-reports/gin-reports.component';
import { GRNReportsComponent } from './grn-reports/grn-reports.component';
import { StockManagerEditComponent } from './stock-manager-edit/stock-manager-edit.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UserUpdateComponent } from './user-update/user-update.component';

import { StockKeeperOrderReportsComponent } from './stock-keeper-order-reports/stock-keeper-order-reports.component';
import { StockKeeperOrderReportsGRNComponent } from './stock-keeper-order-reports-grn/stock-keeper-order-reports-grn.component';
// import { StockKeeperOrderReportsComponentComponent } from './stock-keeper-order-reports-component/stock-keeper-order-reports-component.component';

import { PurchaseCoordinatorEditComponent } from './purchase-coordinator-edit/purchase-coordinator-edit.component';
import { GenerateGINComponent } from './generate-gin/generate-gin.component';
import { GenerateGRNComponent } from './generate-grn/generate-grn.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { InventoryAdEditComponent } from './inventory-ad-edit/inventory-ad-edit.component';
import { InventoryAdPurchaseOrderComponent } from './inventory-ad-purchase-order/inventory-ad-purchase-order.component';
import { InventoryAdSellOrderComponent } from './inventory-ad-sell-order/inventory-ad-sell-order.component';
import { InventoryAdViewGINComponent } from './inventory-ad-view-gin/inventory-ad-view-gin.component';
import { InventoryAdViewGRNComponent } from './inventory-ad-view-grn/inventory-ad-view-grn.component';
import { StockManagerPurchaseOrderComponent } from './stock-manager-purchase-order/stock-manager-purchase-order.component';
import { StockManagerSellOrderComponent } from './stock-manager-sell-order/stock-manager-sell-order.component';
import { StockManagerViewGINComponent } from './stock-manager-view-gin/stock-manager-view-gin.component';
import { StockManagerViewGRNComponent } from './stock-manager-view-grn/stock-manager-view-grn.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PurchaseCoordinatorSellOrderComponent } from './purchase-coordinator-sell-order/purchase-coordinator-sell-order.component';
import { PurchaseCoordinatorPurchaseOrderComponent } from './purchase-coordinator-purchase-order/purchase-coordinator-purchase-order.component';
import { ForecastingDashboardComponent } from './forecasting-dashboard/forecasting-dashboard.component';
import { ForecastingChartComponent } from './forecasting-chart/forecasting-chart.component';

import { DesignerDashComponent } from './designer-dash/designer-dash.component';
import { DesignerSideBarComponent } from './designer-side-bar/designer-side-bar.component';
import { DesigerViewFilesComponent } from './desiger-view-files/desiger-view-files.component';
import { DesignerDeQuantityComponent } from './designer-de-quantity/designer-de-quantity.component';
import { DesignerBillSendComponent } from './designer-bill-send/designer-bill-send.component';


import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ShowroomDashComponent } from './showroom-dash/showroom-dash.component';
import { ShowroomSideBarComponent } from './showroom-side-bar/showroom-side-bar.component';
import { ShowroomBillViewComponent } from './showroom-bill-view/showroom-bill-view.component';
import { ShowroomSendFileComponent } from './showroom-send-file/showroom-send-file.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ShowroomProfileComponent } from './showroom-profile/showroom-profile.component';
import { DesignerProfileComponent } from './designer-profile/designer-profile.component';
import { InventoryBackupComponent } from './inventory-backup/inventory-backup.component';
import { StockReportsComponent } from './stock-reports/stock-reports.component';
import { DatePipe } from '@angular/common';
import { StockManagerForecastingDashComponent } from './stock-manager-forecasting-dash/stock-manager-forecasting-dash.component';
import { PurchaseCoordinatorForecastingDashComponent } from './purchase-coordinator-forecasting-dash/purchase-coordinator-forecasting-dash.component';
import { StockManagerForecatingChartComponent } from './stock-manager-forecating-chart/stock-manager-forecating-chart.component';
import { PurchaseCoordinatorForecatingChartComponent } from './purchase-coordinator-forecating-chart/purchase-coordinator-forecating-chart.component';
import { SystemAdminProfileComponent } from './system-admin-profile/system-admin-profile.component';










@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    BillingComponent,
    BillingSendComponent,
    ReportsComponent,
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
    StockManagerProductPopupComponent,
    RegistrationComponent,
    SystemAdminNavComponent,
    SystemAdminSideComponent,
    SystemAdminDashComponent,
    InventoryAdDeletePopComponent,
    GetUserDetailsComponent,
    ShowroomComponent,
    PurchaseCoordinatorDashComponent,
    PurchaseCoordinatorSideComponent,
    PurchaseCoordinatorNavComponent,
    PurchaseCoordinatorProductComponent,
    PurchaseCoordinatorProductPopupComponent,
    PurchaseCoordinatorProfileComponent,
    GetUserComponent,

    StockKeeperDashComponent,
    StockKeeperNavComponent,
    StockKeeperProfileComponent,
    StockKeeperSidebarComponent,

    GINReportsComponent,
    GRNReportsComponent,
    DeleteUserComponent,
    StockManagerEditComponent,
    DeleteUserComponent,
      StockKeeperOrderReportsComponent,
      StockKeeperOrderReportsGRNComponent,
    StockKeeperOrderReportsComponent,
    StockKeeperOrderReportsGRNComponent,
    StockManagerEditComponent,

    DeleteUserComponent,

      PurchaseCoordinatorEditComponent,
      GenerateGINComponent,
      GenerateGRNComponent,

      UserUpdateComponent,

      PurchaseCoordinatorEditComponent,
      DeleteProductComponent,
      InventoryAdEditComponent,
      InventoryAdPurchaseOrderComponent,
      InventoryAdSellOrderComponent,
      InventoryAdViewGINComponent,
      InventoryAdViewGRNComponent,
      StockManagerPurchaseOrderComponent,
      StockManagerSellOrderComponent,
      StockManagerViewGINComponent,
      StockManagerViewGRNComponent,
      PurchaseCoordinatorSellOrderComponent,
      PurchaseCoordinatorPurchaseOrderComponent,
      ForecastingDashboardComponent,
      ForecastingChartComponent,
      DesignerComponent,

      DesignerDashComponent,
      DesignerSideBarComponent,
      DesigerViewFilesComponent,
      DesignerDeQuantityComponent,
      DesignerBillSendComponent,


      UnauthorizedComponent,
        ShowroomDashComponent,
        ShowroomSideBarComponent,
        ShowroomBillViewComponent,
        ShowroomSendFileComponent,
        UserProfileComponent,
        ShowroomProfileComponent,
        DesignerProfileComponent,
        InventoryBackupComponent,
        StockReportsComponent,
        StockManagerForecastingDashComponent,
        PurchaseCoordinatorForecastingDashComponent,
        StockManagerForecatingChartComponent,
        PurchaseCoordinatorForecatingChartComponent,
        SystemAdminProfileComponent,

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
    MatSelectModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule





  ],
  providers: [DatePipe],

  bootstrap: [AppComponent]
})
export class AppModule { }
