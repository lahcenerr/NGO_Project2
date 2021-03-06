import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { DonationComponent } from './donation/donation.component';
import { DonationService } from './donation.service';
import { UserviewComponent } from './userview/userview.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { MakeDonationComponent } from './make-donation/make-donation.component';
import { RegistrationComponent } from './registration/registration.component';
import { EventregistrationService } from './eventregistration.service';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    UserListComponent,
    EventListComponent,
    AddUserComponent,
    EditUserComponent,
    AddEventComponent,
    EditEventComponent,
    DonationComponent,
    UserviewComponent,
    EventRegistrationComponent,
    MakeDonationComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [ UserService, DonationService, EventregistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
