import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [

  
  { path: "login", component:LoginComponent},
  { path: "signup", component:SignUpComponent},
  { path: "home", component:HomeComponent},
  { path: "userList", component:UserListComponent},
  { path: "eventList", component:EventListComponent},
  { path: "adduser", component:AddUserComponent},
  { path: 'update/:id', component: EditUserComponent },
  { path: "**", component: PageNotFoundComponent},
  { path: "", redirectTo: "/login", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
