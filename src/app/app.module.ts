import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { AdminAddNewUserComponent } from './admin-add-new-user/admin-add-new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    SingupComponent,
    LoginComponent,
    AdmindashComponent,
    AdminprofileComponent,
    AdminnavComponent,
    AdminsidebarComponent,
    AdminAddNewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
