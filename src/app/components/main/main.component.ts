import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthorizationService } from "app/services/authorization.service";
import { MdDialog } from "@angular/material";
import { AuthComponent, AuthRegisterComponent } from "app/components/auth/auth.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  username: string;

  constructor(public dialog: MdDialog, public authService: AuthorizationService) {
    this.checkUser();
   }

  checkUser() {
    if (this.authService.isLoggedIn()) {
      var currentUser = JSON.parse(localStorage.getItem('user'));
      this.username = currentUser.username;
    }
  }

  ngOnInit() {
  }

  loggedIn() {
    this.checkUser();
    return this.authService.isLoggedIn();
  }

  openLoginDialog() {
    this.dialog.open(AuthComponent);
  }

  openSignupDialog() {
    this.dialog.open(AuthRegisterComponent);
  }

  logout() {
    this.authService.logout();
    this.username = null;
  }

}
