import { Component, OnInit } from '@angular/core';
import { menuItem, MenuItems } from "app/models/menu-group-item";

@Component({
  selector: 'app-menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.scss']
})
export class MenuGroupComponent implements OnInit {
  title: 'ERP';
  mItems: menuItem[] = MenuItems;

  constructor() { }

  ngOnInit() {
  }

}
