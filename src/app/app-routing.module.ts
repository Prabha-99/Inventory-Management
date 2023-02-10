import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"admindash",component:AdmindashComponent},
  {path:"login",component:LoginComponent},
  {path:"singup",component:SingupComponent},
  {path:"adminprofile",component:AdminprofileComponent}
  
  

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
