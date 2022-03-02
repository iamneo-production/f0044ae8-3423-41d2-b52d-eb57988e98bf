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
import { PostpaidComponent } from './admin/postpaid/postpaid.component';
import { PrepaidComponent } from './admin/prepaid/prepaid.component';
import { AddPrepaidComponent } from './admin/prepaid/add-prepaid/add-prepaid.component';
import { EditPrepaidComponent } from './admin/prepaid/edit-prepaid/edit-prepaid.component';
import { ViewPrepaidComponent } from './admin/prepaid/view-prepaid/view-prepaid.component';
import { ViewPostpaidComponent } from './admin/postpaid/view-postpaid/view-postpaid.component';
import { EditPostpaidComponent } from './admin/postpaid/edit-postpaid/edit-postpaid.component';
import { AddPostpaidComponent } from './admin/postpaid/add-postpaid/add-postpaid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddonComponent } from './admin/addon/addon.component';
import { AddAddonComponent } from './admin/addon/add-addon/add-addon.component';
import { EditAddonsComponent } from './admin/addon/edit-addon/edit-addon.component';
import { ViewAddonComponent } from './admin/addon/view-addon/view-addon.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { UserControlComponent } from './admin/user-control/user-control.component';
import { AddonsComponent } from './client-view/addons/addons.component';
import { HistoryComponent } from './client-view/history/history.component';
import { NavbarUserComponent } from './client-view/navbar-user/navbar-user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { SearchFilterPipe } from './services/search-filter.pipe';
import { FooterComponent } from './admin/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ClientViewComponent,
    AdminComponent,
    PopularplansComponent,
    PostpaidComponent,
    PrepaidComponent,
    AddPrepaidComponent,
    EditPrepaidComponent,
    ViewPrepaidComponent,
    ViewPostpaidComponent,
    EditPostpaidComponent,
    AddPostpaidComponent,
    AddonComponent,
    AddAddonComponent,
    EditAddonsComponent,
    ViewAddonComponent,
    NavbarComponent,
    UserControlComponent,
    AddonsComponent,
    HistoryComponent,
    NavbarUserComponent,
    SearchFilterPipe,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
