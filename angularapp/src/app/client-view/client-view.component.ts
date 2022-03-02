import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
      selector: 'app-client-view',
      templateUrl: './client-view.component.html',
      styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

      user!: string;
      constructor(private _UserService: UserService) {

            // Gets the Current User
            this.user = this._UserService.CurrentUser;
            // Stores in Local Variable
            this._UserService.CurrentUser = this.user;
      }

      ngOnInit(): void {
      }

}
