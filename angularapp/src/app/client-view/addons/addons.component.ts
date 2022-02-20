import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddonsModel } from 'src/app/shared/AddonModel';
import { RechargeModel } from 'src/app/shared/RechargeModel';
import { UserModel } from 'src/app/shared/UserModel';
import { UserService } from '../user.service';

@Component({
    selector: 'app-addons',
    templateUrl: './addons.component.html',
    styleUrls: ['./addons.component.css'],
})
export class AddonsComponent implements OnInit {
    Addons!: AddonsModel[];
    user!: string;
    RechargeForm!: FormGroup;
    UserDetails!: UserModel;
    SetPlanRecharge!: AddonsModel;


    constructor(private _userService: UserService) {
        // Get the current User
        this.user = this._userService.CurrentUser;
    }

    public ngOnInit(): void {
        // Get All the Addons On startup
        this.GetAddons();

        // Reactive Forms Controls
        this.RechargeForm = new FormGroup({
            _Mobile: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
            _Email: new FormControl(null, [Validators.required]),
        });
    }

    //Gets Addons Value from Service
    GetAddons() {
        this._userService.GetAddons().subscribe((data) => {
            this.Addons = data;
        });
    }

    ToRecharge(index: number) {
        this.SetPlanRecharge = this.Addons[index];
        // this.ngOnInit();
    }

    /**
     * Generates Random Number as Recharge ID
     * @returns Random Number
     */
    generateRandomNumber(): number {
        var minm = 100000;
        var maxm = 999999;
        return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    }

    PutRechargeDetails() {
        // Gets The value from the Fields
        const body: RechargeModel = {
            rechargeId: this.generateRandomNumber(),
            rechargetype: "Addon",
            name: this.user,
            mobile: this.RechargeForm.get('_Mobile')?.value,
            email: this.RechargeForm.get('_Email')?.value,
            rechargePlan: this.SetPlanRecharge?.addonName,
            rechargePrice: this.SetPlanRecharge?.addonPrice,
            planDetails: ""
        };

        // Post Request from Admin Service.
        this._userService.PutRecharge(body).subscribe((data) => {
            this._userService.router.navigate([this.user,'addons']);
        });
    }
}