import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostpaidService } from 'src/app/services/postpaid.service';
import { PlanModel } from '../../../shared/PlanModel';

@Component({
  selector: 'app-edit-postpaid',
  templateUrl: './edit-postpaid.component.html',
  styleUrls: ['./edit-postpaid.component.css']
})
export class EditPostpaidComponent implements OnInit {

  // Constructor Initialization
  constructor(private _postPaidService: PostpaidService){}

  // Stores the Specific Edit Value
  PlanValue !: PlanModel;

  // Reactive Form Controls Initialization
  EditPostPaidForm!: FormGroup;
  ngOnInit(): void {

    // Get the Value From the Service
    this.PlanValue = this._postPaidService.EditId;

    // Initilize value on Start
    this.EditPostPaidForm = new FormGroup({
      _PlanName: new FormControl(this.PlanValue.planName, [Validators.required]),
      _PlanPrice: new FormControl(this.PlanValue.planPrice, [Validators.required , Validators.pattern("[0-9]{1,5}")]),
      _PlanValidity: new FormControl(this.PlanValue.planValidity, [Validators.required , Validators.pattern("[0-9]{1,5}")]),
      _PlanDetails: new FormControl(this.PlanValue.planDetails, [Validators.required]),
      _PlanOffers : new FormControl(this.PlanValue.planOffers, [Validators.required])
    });
  }

 /**
     * @Action Collects the Value from Fields & Post a Plan 
     * Http Put Method
     */
  UpdatePlan() {

    // Gets The value from the Fields
    const body: PlanModel = {
      planId: this.PlanValue.planId,
      planName: this.EditPostPaidForm?.get('_PlanName')?.value,
      planPrice: this.EditPostPaidForm?.get('_PlanPrice')?.value,
      planType : this.PlanValue.planType,
      planValidity : this.EditPostPaidForm.get('_PlanValidity')?.value,
      planDetails: this.EditPostPaidForm?.get('_PlanDetails')?.value ,
      planOffers : this.EditPostPaidForm?.get('_PlanOffers')?.value
    };

    // Put Request To Service To Add Plan
    this._postPaidService.EditPlan(body.planId,body).subscribe();

    // Navigate Back to PostPaid Plans
    setTimeout(() => {
      this._postPaidService.router.navigate(['/admin/postpaid/view-post-paid']);
  }, 100);
  }
}
