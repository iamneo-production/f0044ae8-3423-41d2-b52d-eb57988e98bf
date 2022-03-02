import { Component, OnInit } from '@angular/core';
import { PostpaidService } from 'src/app/services/postpaid.service';
import { PlanModel } from '../../../shared/PlanModel';

@Component({
    selector: 'app-view-postpaid',
    templateUrl: './view-postpaid.component.html',
    styleUrls: ['./view-postpaid.component.css'],
})
export class ViewPostpaidComponent implements OnInit {
    constructor(private _postPaidService: PostpaidService) { }

    public query: any = '';

    Plans!: PlanModel[];
    public ngOnInit(): void {
        this.GetPlans();
    }


    /**
       * @Action Gets all the Plans
       * Assign in Plans Variable
    */
    GetPlans() {
        this._postPaidService.GetPlans().subscribe(
            (data) => {
                this.Plans = data;
                this.ShowPostPaidOnly();
            }
        );
    }

    /**
     * Extract All the  Plans from thr PlanModel
     * Seperates the Plans Whichs are of Postpaid plans
     * to Display Only PostPaidPlans
     */
    PostPaidPlans: PlanModel[] = [];
    ShowPostPaidOnly() {
        let i: number;
        for (i = 0; i < this.Plans.length; i++) {
            if (this.Plans[i].planType === "PostPaid") {
                this.PostPaidPlans.push(this.Plans[i]);
            }
        }
    }

    /**
     * Get the Plan Of Specific Item
     * @param index
     */
    GetPlan(index: number) {
        this._postPaidService.GetPlan(this.Plans[index].planId).subscribe();
    }

    /**
     * Navigating to Add Plan
     */
    AddPlan() {
        this._postPaidService.router.navigate(['/admin/postpaid/add-post-paid']);
    }

    /**
     * Assigning the Value in Service
     * to Receive from EditPlansComponent
     * @param index
     */
    EditSelectPlan(index: number) {
        this._postPaidService.EditId = this.Plans[index];
    }

    /**
     * Delete the Specific Item from view and DB
     * @param index
     */
    OnDelete(index: number) {
        this._postPaidService.OnDelete(this.Plans[index].planId).subscribe();
        this.Plans.splice(index, 1);
    }
}