import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PrepaidService } from 'src/app/services/prepaid.service';
import { PlanModel } from '../../../shared/PlanModel';

@Component({
  selector: 'app-edit-prepaid',
  templateUrl: './edit-prepaid.component.html',
  styleUrls: ['./edit-prepaid.component.css']
})
export class EditPrepaidComponent implements OnInit {

  // Constructor Initialization
  constructor(private _prePaidService: PrepaidService) { }

  // Stores the Specific Edit Value
  PlanValue !: PlanModel;

  // Reactive Form Controls Initialization
  EditPrePaidForm!: FormGroup;
  ngOnInit(): void {

    // Get the Value From the Service
    this.PlanValue = this._prePaidService.EditId;

    // Initilize value on Start
    this.EditPrePaidForm = new FormGroup({
      _PlanName: new FormControl(this.PlanValue.planName, [Validators.required]),
      _PlanPrice: new FormControl(this.PlanValue.planPrice, [Validators.required, Validators.pattern("[0-9]{1,5}")]),
      _PlanValidity: new FormControl(this.PlanValue.planValidity, [Validators.required, Validators.pattern("[0-9]{1,5}")]),
      _PlanDetails: new FormControl(this.PlanValue.planDetails, [Validators.required]),
      _PlanOffers: new FormControl(this.PlanValue.planOffers, [Validators.required]),
    });
  }

  /**
    * @Action Collects the Value from Fields & Post a Plan 
    * Http Put Method
    */
  UpdatePlan() {

    // gets The value from the Fields
    const body: PlanModel = {
      planId: this.PlanValue.planId,
      planName: this.EditPrePaidForm?.get('_PlanName')?.value,
      planPrice: this.EditPrePaidForm?.get('_PlanPrice')?.value,
      planType: "PrePaid",
      planValidity: this.EditPrePaidForm.get('_PlanValidity')?.value,
      planDetails: this.EditPrePaidForm?.get('_PlanDetails')?.value,
      planOffers: this.EditPrePaidForm?.get('_PlanOffers')?.value
    };

    // Put Request To Service To Add Plan
    this._prePaidService.EditPlan(body.planId, body).subscribe();

    // Navigate Back to PostPaid Plans
    setTimeout(() => {
      this._prePaidService.router.navigate(['/admin/prepaid/view-pre-paid'])
    }, 100);
  }
}
