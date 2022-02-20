import { Component, OnInit } from '@angular/core';
import { RechargeModel } from 'src/app/shared/RechargeModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private _userService : UserService) { }

  /**
   * @Action Maintains Recharge History Of Individual Users
   */
  Recharges!: RechargeModel[];
  ngOnInit(): void {
    this._userService.GetRecharges().subscribe(
      data =>{
        this.Recharges = data;
      }
    );
  }

}