import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { NgToastService } from 'ng-angular-popup'
import { UserService } from 'src/app/services/user.service';


@Component({
      selector: 'app-login',
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

      constructor(private _loginService: LoginService, private toast: NgToastService, private _userService: UserService) { }

      // Reactive Forms Initilization & Validation
      LoginForm !: FormGroup;
      ngOnInit(): void {
            this.LoginForm = new FormGroup({
                  'email': new FormControl(null, [Validators.required, Validators.email]),
                  'password': new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9_@#$!?></|+*]{8,12}")])
            })
      }
      /**
       * Login Actions
       * 
       * Checks Whether the UserName is User or Admin
       * and Navigates Based Upon the type of User
       * 
       */

      // Return True or False From Server
      auth!: boolean;

      // Stores the CurrentUser Username
      user!: string;
      role!: string;
      onSubmit() {

            // Gets UserName and password From Fields
            let _email = this.LoginForm.get('email')?.value;
            let _password = this.LoginForm.get('password')?.value;

            //Change
            this._loginService.LoginCheck(_email, _password).subscribe({
                  next: (data) => {
                        this.auth = data.allowed;
                        this.user = data.user;
                        this.role = data.userRole;

                        console.log(data);
                        this._userService.CurrentUser = data.user;
                        this._userService.CurrentUserEmail = data.email;

                        // Admin Login
                        if (this.auth && (this.role === "admin")) {
                              this._loginService.router.navigate(['admin', 'prepaid', 'view-pre-paid']);
                              this.toast.success({ detail: "Welcome Admin!", duration: 5000, summary: this.user + " Logged In !" })
                        }

                        // User Login
                        else if (this.auth && (this.role === "user")) {
                              this._loginService.router.navigate([this.user, "viewplans"]);
                              this.toast.success({ detail: "Welcome!", duration: 5000, summary: this.user + " Logged In !" })
                        }

                        // Invalid User/Admin
                        else if (!this.auth) {
                              this.toast.error({ detail: "Invalid User", duration: 5000, summary: "Please Check Username and Password !" })
                        }
                        console.log(this.auth)
                  },
                  error: (err) => {
                        console.log(err);
                        this.toast.error({ detail: "An Error Occured!", duration: 4000 })
                  }
            });
      }
      ToSignup() {
            this._loginService.router.navigate(['/auth/signup']);
      }
}
