import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/shared/UserModel';
import { UserControlService } from '../../services/user-control.service';

@Component({
    selector: 'app-user-control',
    templateUrl: './user-control.component.html',
    styleUrls: ['./user-control.component.css']
})
export class UserControlComponent implements OnInit {

    constructor(private _userService: UserControlService) {
    }
    Users !: UserModel[];
    SavedUser !: UserModel;

    // *----------------*------------*----------------*

    // Reactive Forms Initialization
    EditUserForm !: FormGroup
    ngOnInit(): void {
        this.GetUsers();
        this.EditUserForm = new FormGroup({
            _Email: new FormControl(null, [Validators.required, Validators.email]),
            _Password: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9_@#$!?></|+*]{8,16}")]),
            _Username: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9_]{5,12}")]),
            _MobileNumber: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
            _UserRole: new FormControl(null, [Validators.required])
        });

    }

    // Gets All the Users
    GetUsers() {
        this._userService.GetUsers().subscribe(
            (data: UserModel[]) => {
                this.Users = data;
            }
        )
    }

    // Collects Data from User Fields and Sends Put Request
    PutUserDetails() {
        const body = {
            email: this.EditUserForm.get('_Email')?.value,
            password: this.EditUserForm.get('_Password')?.value,
            username: this.EditUserForm.get('_Username')?.value,
            mobileNumber: this.EditUserForm.get('_MobileNumber')?.value,
            userRole: this.EditUserForm.get('_UserRole')?.value
        }

        this._userService.EditUser(body.email,body).subscribe(() => {
            this.GetUsers()
        })
    }

    // Delete a Specific User
    DeleteUser(index:number){
        this._userService.DeleteUser(this.Users[index].email).subscribe();
        this.Users.splice(index,1);
    }

    // On Click Edit Show the User Values Dynamically
    SaveUser(index: number) {
        this.SavedUser = this.Users[index];
        this.EditUserForm.setValue({
            _Email: this.SavedUser.email,
            _Password: this.SavedUser.password,
            _Username: this.SavedUser.username,
            _MobileNumber: this.SavedUser.mobileNumber,
            _UserRole: this.SavedUser.userRole
        })
    }
}