import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/shared/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserControlService {

  constructor(public http: HttpClient, public router: Router) { }
  BaseUrl = "https://localhost:5001/admin/users/";

    // *----------------*--------------*-------------

    /**
     * Get All Users On Startup
     */
    Plans!: UserModel[];
    GetUsers(): Observable<UserModel[]> {
        let Url = this.BaseUrl+"getUsers";
        return this.http.get<UserModel[]>(Url)
    }

    // *----------------*--------------*-------------
    /**
     * @param PlanId
     * Action : Get Addon with specific Id
     * return AddonsModel
     * 
     * Used In AddonComponent Class
     */

    Plan!: UserModel;
    GetUser(email : string): Observable<UserModel> {
        let Url = this.BaseUrl+"getUser/"+email;
        return this.http.get<UserModel>(Url);
    }

    // *----------------*--------------*-------------

    //Edit User | Put Request

    EditId!: UserModel;
    EditUser(params: string, body: UserModel):Observable<any>{
        let Url = this.BaseUrl+"editUser/"+params;
        console.log(body);
        const headers = { 'content-type': 'application/json' };
        return this.http.put<UserModel>(Url , JSON.stringify(body), { headers: headers });
    }

    // *----------------*--------------*-------------

    // Delete User Delete Request
    DeleteUser(Email: string):Observable<any> {
        let DeleteUrl = this.BaseUrl+"deleteUser/";
        return this.http.delete<UserModel>(DeleteUrl + Email)
    }

}
