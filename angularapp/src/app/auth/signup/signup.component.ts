import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { UserModel } from 'src/app/shared/UserModel';
import { NgToastService } from 'ng-angular-popup'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _loginService : LoginService, private toast: NgToastService ) { }

    // Reactive Forms Initilization & Validation
    SignupForm!: FormGroup;
    ngOnInit(): void {
        this.SignupForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'username' : new FormControl(null, [Validators.required , Validators.pattern("[a-zA-Z0-9_]{8,12}")]),
            'mobileNumber': new FormControl(null, [Validators.required , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
            'password': new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9_@#$!?></|+*]{8,16}")]),
            'confirmPass': new FormControl(null, [Validators.required ,Validators.pattern("[a-zA-Z0-9_@#$!?></|+*]{8,16}") ])
        })
    }


    // Checking Match of Passwords
    InvalidPass: boolean = false;
    // Checks On Change If Password and Confirm Password are same
    PassCheck() {
        let pass = this.SignupForm.get('password')?.value;
        let cpass = this.SignupForm.get('confirmPass')?.value;
        console.log(typeof(pass) +"   "+pass.length)
        if(pass.length>= 8 && cpass.length >=8){
            if (pass === cpass) {
                this.InvalidPass = true;
            }
            else {
                this.InvalidPass = false;
            }
        }
        else{
            this.InvalidPass = false;
        }
    }

    /**
     * SignUp and Login Button Actions
     * Get Value from Fields Only if Valid
     */
    onSubmit() {
        const body : UserModel = {
            email : this.SignupForm.get('email')?.value,
            password : this.SignupForm.get('password')?.value,
            username : this.SignupForm.get('username')?.value,
            mobileNumber : this.SignupForm.get('mobileNumber')?.value,
            userRole : "user"
        }

        // Post the Signup Value in User Model
        this._loginService.SignupCheck(body).subscribe();
        this.toast.success({detail: "Signup Success!" , duration: 5000 })

        // Navigating Back To Login Page
        setTimeout(() => {
            this._loginService.router.navigate(['auth', 'login']);
        }, 100);
    }

}
