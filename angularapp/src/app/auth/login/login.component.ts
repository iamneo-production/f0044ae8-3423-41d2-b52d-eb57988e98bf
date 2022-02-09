import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private _loginService: LoginService) { }

    // Reactive Forms Initilization & Validation
    LoginForm !: FormGroup;
    ngOnInit(): void {
        this.LoginForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required , Validators.pattern("[a-zA-Z0-9_@#$!?></|+*]{8,12}")])
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
    onSubmit() {

        // Gets UserName and password From Fields
        let _email = this.LoginForm.get('email')?.value;
        let _password = this.LoginForm.get('password')?.value;

        // Admin Email Check
        if (_email ==='admin@gmail.com') {

            // Return the User is valid or Not
            this._loginService.AdminCheck(_email, _password).subscribe(data => {
                this.auth = data.allowed;
                console.log(this.auth)
            });

            // Navigates If the User is valid 
            setTimeout(() => {
                if (this.auth) {
                    this._loginService.router.navigate(['admin','prepaid' ,'view-pre-paid']);
                } else {
                    // Else Alert The User
                    alert("User Not Avaliable for admin")
                }
            }, 100);
        } 
        
        // Normal User Check
        else {

            // Return the User is valid or Not
            this._loginService.LoginCheck(_email, _password ).subscribe(data => {
                this.auth = data.allowed;
                this.user = data.user;
            });

            // Navigates If the User is valid 
            setTimeout(() => {
                if (this.auth) {
                    this._loginService.router.navigate([this.user, "viewplans"]);
                } else {
                    // Else Alert The User
                    alert("User Not Avaliable")
                }
            }, 100);
        }
    }
    ToSignup(){
        this._loginService.router.navigate(['/auth/signup']);
    }
}
