import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private toast: NgToastService) { }

  ngOnInit(): void {
    
  }
  toaster(){
    this.toast.success({detail: "Logout Successful!" , duration: 4000})    
  }

}
