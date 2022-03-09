import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddonsModel } from '../shared/AddonModel';
import { PlanModel } from '../shared/PlanModel';
import { RechargeModel } from '../shared/RechargeModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    public router: Router,
) { }
BaseUrl = "https://8080-cfdbfaffcbafbeaabeccbbfbcafdeccaedae.examlyiopb.examly.io/";

// *----------------*--------------*-------------

Plans!: PlanModel[];
GetPlans(): Observable<PlanModel[]> {
    let Url = this.BaseUrl + 'admin/getPlans/';
    return this.http.get<PlanModel[]>(Url);
}

// *----------------*--------------*-------------

Addons!: AddonsModel[];
GetAddons(): Observable<AddonsModel[]> {
    let Url = this.BaseUrl + 'admin/getAddons/';
    return this.http.get<AddonsModel[]>(Url);
}

// *----------------*--------------*-------------

GetRecharges(): Observable<RechargeModel[]> {
    let Url = this.BaseUrl + this.CurrentUser + '/getRecharge/'
    return this.http.get<RechargeModel[]>(Url);
}

// *----------------*--------------*-------------

PutRecharge(body: RechargeModel):Observable<any> {
    let Recharge = this.CurrentUser + '/addRecharge/';
    const headers = { 'content-type': 'application/json' };
    return this.http.post<RechargeModel>(this.BaseUrl + Recharge, JSON.stringify(body), {headers: headers})
}

// *----------------*--------------*-------------

setToRecahrge!: AddonsModel | PlanModel;


// Parse the CurrentUser From URL
CurrentUser!: string;
GetCurrentUser(): string {
    let p = this.router.url.split('/');
    return p[1];
}
}
