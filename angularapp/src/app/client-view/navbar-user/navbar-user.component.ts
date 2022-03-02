import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {

  constructor(private toast: NgToastService) { }

  ngOnInit(): void {
  }

  toaster(){
    this.toast.success({detail: "Logout Successful!" , duration: 4000})    
  }

}
