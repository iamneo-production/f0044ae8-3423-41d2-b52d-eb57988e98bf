import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddPostpaidComponent } from './admin/postpaid/add-postpaid/add-postpaid.component';
import { EditPostpaidComponent } from './admin/postpaid/edit-postpaid/edit-postpaid.component';
import { PostpaidComponent } from './admin/postpaid/postpaid.component';
import { ViewPostpaidComponent } from './admin/postpaid/view-postpaid/view-postpaid.component';
import { AddPrepaidComponent } from './admin/prepaid/add-prepaid/add-prepaid.component';
import { EditPrepaidComponent } from './admin/prepaid/edit-prepaid/edit-prepaid.component';
import { PrepaidComponent } from './admin/prepaid/prepaid.component';
import { ViewPrepaidComponent } from './admin/prepaid/view-prepaid/view-prepaid.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
