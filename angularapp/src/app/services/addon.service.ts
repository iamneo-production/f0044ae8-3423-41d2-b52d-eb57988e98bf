import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddonsModel } from '../shared/AddonModel';

@Injectable({
  providedIn: 'root'
})
export class AddonService {

  constructor(public http: HttpClient, public router: Router) { }

  
  BaseUrl = "https://localhost:5001/";
  Plans!: AddonsModel[];

  // *----------------*--------------*-------------
  
  /**
   * GetAddons Methods Receive a Array of Objects 
   * Action : GetAll Addons
   * Type : @class AddonModel
   * return AddonsModel[]
   * 
   * Used In ViewAddonComponent Class 
   */

  GetAddons(): Observable<AddonsModel[]> {
      let Url = this.BaseUrl+"admin/getAddons/";
      return this.http.get<AddonsModel[]>(Url);
  }

  // *----------------*--------------*-------------


  /**
   * @param AddonId
   * Action : Get Addon with specific Id
   * return AddonsModel
   * 
   * Used In  ViewAddonComponent Class
   */

  Plan!: AddonsModel;
  GetAddon(AddonId: number): Observable<AddonsModel> {
      let Url = this.BaseUrl+"admin/getAddon/"
      return this.http.get<AddonsModel>(Url + AddonId);
  }


  // *----------------*--------------*-------------

  /**
   * Action : To add a new Addon Plan
   * @param body 
   * 
   * Used in Add Addon Component
   */
  AddAddon(body : AddonsModel):Observable<AddonsModel>{
      let Url = this.BaseUrl+"admin/addAddon/";
      const headers = { 'content-type': 'application/json'}  ;
      return this.http.post<AddonsModel>(Url,JSON.stringify(body),{'headers':headers});
  }


  // *----------------*--------------*-------------
  
  /**
   * Action : To Edit The specific Put Method to Update the Existing
   * @param params , @param body 
   * Type : @class AddonModel
   * returns AddonsModel & Observe On changes
   * 
   * Used in EditAddonsComponent class
  */

  EditId!: AddonsModel;
  EditAddon(params: number, body: AddonsModel):Observable<AddonsModel>{
      let Url = this.BaseUrl+"admin/editAddon/";

      return this.http.put<AddonsModel>(Url + params, body);
  }

  // *----------------*--------------*-------------

  /**
   * @param AddonId 
   * Action : On Delete Addon 
   * returns AddonsModel & Observe On changes
   * 
   * Used In AddonComponent Class
   */

  OnDelete(AddonId: number):Observable<AddonsModel> {
      let DeleteUrl = this.BaseUrl+"admin/deleteAddon/";
      return this.http.delete<AddonsModel>(DeleteUrl + AddonId);
  }

  // *----------------*--------------*-------------
}
