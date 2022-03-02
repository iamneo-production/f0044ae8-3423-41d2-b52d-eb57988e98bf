import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlanModel } from 'src/app/shared/PlanModel';
import { RechargeModel } from 'src/app/shared/RechargeModel';
import { UserService } from 'src/app/services/user.service';
import { NgToastService } from 'ng-angular-popup'


@Component({
      selector: 'app-popularplans',
      templateUrl: './popularplans.component.html',
      styleUrls: ['./popularplans.component.css']
})
export class PopularplansComponent implements OnInit {

      RechargeForm!: FormGroup;
      SetPlanRecharge!: PlanModel;
      user!: string;
      email!: string;

      public query: any = '';

      constructor(private _userService: UserService, private toast: NgToastService) {
            this.user = this._userService.CurrentUser;
            this.email = this._userService.CurrentUserEmail;
      }

      Plans!: PlanModel[];
      public ngOnInit(): void {
            this.GetPlans();

            this.RechargeForm = new FormGroup({
                  _RechargeType: new FormControl(null, [Validators.required]),
                  _Mobile: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
                  _Name: new FormControl(null, [Validators.required]),
            });
      }

      GetPlans() {
            this._userService.GetPlans().subscribe((data) => {
                  this.Plans = data;
            });
      }

      ToRecharge(index: number) {
            this.SetPlanRecharge = this.Plans[index];
            this.ngOnInit();
      }

      generateRandomNumber(): number {
            var minm = 100000;
            var maxm = 999999;
            return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
      }
      PutRechargeDetails() {
            // gets The value from the Fields
            const body: RechargeModel = {
                  rechargeId: this.generateRandomNumber(),
                  rechargetype: this.SetPlanRecharge?.planType,
                  name: this.RechargeForm.get('_Name')?.value,
                  userName: this.user,
                  mobile: this.RechargeForm.get('_Mobile')?.value,
                  email: this.RechargeForm.get('_Email')?.value,
                  rechargePlan: this.SetPlanRecharge?.planName,
                  rechargePrice: this.SetPlanRecharge?.planPrice,
                  planDetails: this.SetPlanRecharge?.planDetails
            };
            console.log(body);

            // Post Request from Admin Service.
            this._userService.PutRecharge(body).subscribe((data) => {
                  this._userService.router.navigate([this.user, 'viewplans']);
                  this.toast.success({ detail: "Recharge Success!", duration: 4000 })
                  console.log(data);
            });
      }

}
