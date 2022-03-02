import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlanModel } from '../shared/PlanModel';
import { NgToastService } from 'ng-angular-popup'


@Injectable({
    providedIn: 'root'
})
export class PostpaidService {

    constructor(public http: HttpClient, public router: Router, private toast: NgToastService) { }

    BaseUrl = "https://8080-cfdbfaffcbafbeaabeccbbfbcafdeccaedae.examlyiopb.examly.io/";

    // *----------------*--------------*-------------

    /**
         * GetPlans Methods Receive a Array of Objects 
         * Action : GetAll Plans
         * Type : @class PlanModel
         * return PlanModel[]
         * 
         * Used In PlanComponent Class 
         */
    Plans!: PlanModel[];
    GetPlans(): Observable<PlanModel[]> {
        let Url = this.BaseUrl + "admin/getPlans/";
        return this.http.get<PlanModel[]>(Url);

    }

    // *----------------*--------------*-------------

    /**
     * @param PlanId
     * @Action : Get Plan with specific Id
     * return PlanModel
     * 
     * Used In AddPostPaidComponent
     */

    Plan!: PlanModel;
    GetPlan(PlanId: number): Observable<PlanModel> {
        let Url = this.BaseUrl + "admin/getPlan"
        return this.http.get<PlanModel>(Url + PlanId);
    }


    // *----------------*--------------*-------------
    /**
     * Action : To add a new Plan Plan
     * @param body 
     */
    AddPlan(body: PlanModel): Observable<PlanModel> {
        let Url = this.BaseUrl + "admin/addPlan";
        const headers = { 'content-type': 'application/json' };
        this.toast.success({detail: "Postpaid Plan Added!" , duration: 4000})
        return this.http.post<PlanModel>(Url, JSON.stringify(body), { 'headers': headers });
    }

    // *----------------*--------------*-------------


    /**
     * Action : To Edit The specific Put Method to Update the Existing
     * @param params , @param body 
     * Type : @class PlanModel
     * return a response Body
     * 
     * Used in EditPlansComponent class
    */

    EditId!: PlanModel;
    EditPlan(params: number, body: PlanModel): Observable<PlanModel> {
        let Url = this.BaseUrl + "admin/editPlan/";
        this.toast.info({detail: "Postpaid Plan Updated!" , duration: 4000});
        return this.http.put<PlanModel>(Url + params, body);
    }

    // *----------------*--------------*-------------

    /**
     * @param PlanId 
     * Action : On Delete Plan 
     * returns void
     * 
     * Used In PlanComponent Class
     */

    OnDelete(PlanId: number): Observable<PlanModel> {
        let DeleteUrl = this.BaseUrl + "admin/deletePlan/";
        this.toast.error({detail: "Postpaid Plan Deleted!" , duration: 4000});
        return this.http.delete<PlanModel>(DeleteUrl + PlanId)
    }

    // *----------------*--------------*-------------

    /**
     * Number Generator for PlanId
     * @returns A Random Number
     */
    generateRandomNumber(): number {
        var minm = 100000;
        var maxm = 999999;
        return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    }

}
