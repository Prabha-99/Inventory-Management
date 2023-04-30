import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderReportsComponent } from './order-reports/order-reports.component';
import { ReportsComponent } from './reports/reports.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BillingComponent } from './billing/billing.component';
import { BillingSendComponent } from './billing-send/billing-send.component';
import { BillingViewComponent } from './billing-view/billing-view.component';




const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"sidebar",component:SidebarComponent},
  
  {path:"billing",component:BillingComponent},
  {path:"billingsend",component:BillingSendComponent},
  {path:"billingview",component:BillingViewComponent},

  {path:"reports",component:ReportsComponent},
  {path:"orderreports",component:OrderReportsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 

})
export class AppRoutingModule { }

