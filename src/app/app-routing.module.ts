import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AdminAddNewUserComponent } from './admin-add-new-user/admin-add-new-user.component';
import { AdminUpdateUserComponent } from './admin-update-user/admin-update-user.component';
import { AdminUpdatePasswordComponent } from './admin-update-password/admin-update-password.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"admindash",component:AdmindashComponent},
  {path:"login",component:LoginComponent},
  {path:"singup",component:SingupComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:"adminprofile",component:AdminprofileComponent},
  {path:"admin-add-new-user",component:AdminAddNewUserComponent},
  {path:"admin-update-user",component:AdminUpdateUserComponent},
  {path:"admin-update-password",component:AdminUpdatePasswordComponent}
  

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
