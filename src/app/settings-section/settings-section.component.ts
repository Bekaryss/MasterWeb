import { Component, OnInit } from '@angular/core';
import { User } from "app/models/user";

@Component({
  selector: 'app-settings-section',
  templateUrl: './settings-section.component.html',
  styleUrls: ['./settings-section.component.scss']
})
export class SettingsSectionComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit() {
    var currentUser = JSON.parse(localStorage.getItem('user'));
    this.user = currentUser.user;
  }

}
