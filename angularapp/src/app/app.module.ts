import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { AdminComponent } from './admin/admin.component';
import { PopularplansComponent } from './client-view/popularplans/popularplans.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { PostpaidComponent } from './admin/postpaid/postpaid.component';
import { PrepaidComponent } from './admin/prepaid/prepaid.component';
import { AddPrepaidComponent } from './admin/prepaid/add-prepaid/add-prepaid.component';
import { EditPrepaidComponent } from './admin/prepaid/edit-prepaid/edit-prepaid.component';
import { ViewPrepaidComponent } from './admin/prepaid/view-prepaid/view-prepaid.component';
import { ViewPostpaidComponent } from './admin/postpaid/view-postpaid/view-postpaid.component';
import { EditPostpaidComponent } from './admin/postpaid/edit-postpaid/edit-postpaid.component';
import { AddPostpaidComponent } from './admin/postpaid/add-postpaid/add-postpaid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ClientViewComponent,
    AdminComponent,
    PopularplansComponent,
    UserManagementComponent,
    PostpaidComponent,
    PrepaidComponent,
    AddPrepaidComponent,
    EditPrepaidComponent,
    ViewPrepaidComponent,
    ViewPostpaidComponent,
    EditPostpaidComponent,
    AddPostpaidComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
