import { Component, OnInit } from '@angular/core';
import { LMItem, LMItems } from "app/models/left-menu-items";

@Component({
  selector: 'app-info-left-menu',
  templateUrl: './info-left-menu.component.html',
  styleUrls: ['./info-left-menu.component.scss']
})
export class InfoLeftMenuComponent implements OnInit {
  menuList: LMItem[] = LMItems;
  title: string = "Dashboard";
  menu: LMItem;

  constructor() { }

  ngOnInit() {
  }
  onSelect(menu: LMItem){
    this.title = menu.title;
  }

}
