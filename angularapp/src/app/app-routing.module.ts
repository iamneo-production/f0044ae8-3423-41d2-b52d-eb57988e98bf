import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddonComponent } from './admin/addon/add-addon/add-addon.component';
import { AddonComponent } from './admin/addon/addon.component';
import { EditAddonsComponent } from './admin/addon/edit-addon/edit-addon.component';
import { ViewAddonComponent } from './admin/addon/view-addon/view-addon.component';
import { AdminComponent } from './admin/admin.component';
import { AddPostpaidComponent } from './admin/postpaid/add-postpaid/add-postpaid.component';
import { EditPostpaidComponent } from './admin/postpaid/edit-postpaid/edit-postpaid.component';
import { PostpaidComponent } from './admin/postpaid/postpaid.component';
import { ViewPostpaidComponent } from './admin/postpaid/view-postpaid/view-postpaid.component';
import { AddPrepaidComponent } from './admin/prepaid/add-prepaid/add-prepaid.component';
import { EditPrepaidComponent } from './admin/prepaid/edit-prepaid/edit-prepaid.component';
import { PrepaidComponent } from './admin/prepaid/prepaid.component';
import { ViewPrepaidComponent } from './admin/prepaid/view-prepaid/view-prepaid.component';
import { UserControlComponent } from './admin/user-control/user-control.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddonsComponent } from './client-view/addons/addons.component';
import { ClientViewComponent } from './client-view/client-view.component'
import { HistoryComponent } from './client-view/history/history.component';
import { PopularplansComponent } from './client-view/popularplans/popularplans.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path : ':user' ,component : ClientViewComponent,
    children :[
      { path : 'viewplans' , component : PopularplansComponent},
      { path : 'addons' , component : AddonsComponent },
      { path : 'history' , component : HistoryComponent},
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'postpaid',
        component: PrepaidComponent,
        children: [
          { path: 'view-post-paid', component: ViewPostpaidComponent },
          { path: 'edit-post-paid/:id', component: EditPostpaidComponent },
          { path: 'add-post-paid', component: AddPostpaidComponent },
        ],
      },
      {
        path: 'prepaid',
        component: PostpaidComponent,
        children: [
          { path: 'view-pre-paid', component: ViewPrepaidComponent },
          { path: 'edit-pre-paid/:id', component: EditPrepaidComponent },
          { path: 'add-pre-paid', component: AddPrepaidComponent },
        ],
      },
      {
        path: 'addon',
        component: AddonComponent,
        children: [
          { path: 'view-addons', component: ViewAddonComponent },
          { path: 'edit-addon/:id', component: EditAddonsComponent },
          { path: 'add-addon', component: AddAddonComponent },
        ],
      },
      {path : 'users' , component : UserControlComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
