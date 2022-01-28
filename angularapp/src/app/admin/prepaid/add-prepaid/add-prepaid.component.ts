import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PrepaidService } from 'src/app/services/prepaid.service';
import { PlanModel } from '../../../shared/PlanModel';

@Component({
    selector: 'app-add-prepaid',
    templateUrl: './add-prepaid.component.html',
    styleUrls: ['./add-prepaid.component.css']
})
export class AddPrepaidComponent implements OnInit {

    // PrePaid Service Initialization

    constructor(private _prePaidService: PrepaidService) { }

    // *----------------*--------------*-------------

    // Reactive Forms Initialization
    AddPrePaidForm!: FormGroup;
    ngOnInit(): void {
        this.AddPrePaidForm = new FormGroup({
            _PlanId: new FormControl(null, [Validators.required]),
            _PlanName: new FormControl(null, [Validators.required]),
            _PlanPrice: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{1,5}")]),
            _PlanValidity: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{1,5}")]),
            _PlanDetails: new FormControl(null, [Validators.required]),
            _PlanOffers: new FormControl(null, [Validators.required])
        });
    }

    // *----------------*--------------*-------------

    /**
     * @Action Collects the Value from Fields & Post a Plan 
     */
    AddAddons() {

        // Gets The value from the Fields
        const body: PlanModel = {
            planId: this._prePaidService.generateRandomNumber(),
            planName: this.AddPrePaidForm?.get('_PlanName')?.value,
            planPrice: this.AddPrePaidForm?.get('_PlanPrice')?.value,
            planType: "PrePaid",
            planValidity: this.AddPrePaidForm.get('_PlanValidity')?.value,
            planDetails: this.AddPrePaidForm?.get('_PlanDetails')?.value,
            planOffers: this.AddPrePaidForm?.get('_PlanOffers')?.value

        };
        // Post Request from Admin Service.
        this._prePaidService.AddPlan(body).subscribe();

        // Navigating Back to Postpaid plans
        setTimeout(() => {
            this._prePaidService.router.navigate(['/admin/prepaid/view-pre-paid']);
        }, 100);

    }

}
