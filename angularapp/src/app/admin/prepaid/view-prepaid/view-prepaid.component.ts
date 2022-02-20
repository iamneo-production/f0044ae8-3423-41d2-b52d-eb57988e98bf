import { Component, OnInit } from '@angular/core';
import { PlanModel } from '../../../shared/PlanModel';
import { PrepaidService } from 'src/app/services/prepaid.service';

@Component({
  selector: 'app-view-prepaid',
  templateUrl: './view-prepaid.component.html',
  styleUrls: ['./view-prepaid.component.css']
})
export class ViewPrepaidComponent implements OnInit {

  constructor(private _prePaidService: PrepaidService) {
  }

  Plans: PlanModel[] = [];
  public ngOnInit(): void {
      this.GetPlans();
  }

  /**
     * @Action Gets all the Plans
     * Assign in Plans Variable
  */

  GetPlans() {
      this._prePaidService.GetPlans().subscribe(data => {
          this.Plans = data;
          this.ShowPrepaidOnly();
      });
  }

  /**
    * Extract All the  Plans from thr PlanModel
    * Seperates the Plans Whichs are of Prepaid plans
    * to Display Only PrePaidPlans
    */
  PrePaidPlans: PlanModel[] = [];
  ShowPrepaidOnly() {
      let i: number;
      for (i = 0; i < this.Plans.length; i++) {
          if (this.Plans[i].planType === "PrePaid") {
              this.PrePaidPlans.push(this.Plans[i]);
          }
      }
  }


  /**
   * Get the Addon Of Specific Item
   * @param index
   */
  GetAddon(index: number) {
      this._prePaidService.GetPlan(this.Plans[index].planId).subscribe();
  }


  /**
   * Assigning the Value in Service
   * to Receive from EditAddonsComponent
   * @param index
   */
  EditSelectPlan(index: number) {
      this._prePaidService.EditId = this.Plans[index];
  }

  /**
   * Delete the Specific Item from view and DB
   * @param index
   */
  OnDelete(index: number) {
      this._prePaidService.OnDelete(this.Plans[index].planId).subscribe();
      this.PrePaidPlans.splice(index, 1);
  }


  /**
   * Navigating to Add Addon
  */
  AddPlan() {
      this._prePaidService.router.navigate(['/admin/prepaid/add-pre-paid']);
  }

}
