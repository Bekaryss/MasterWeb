import { Component, OnInit, ViewChild } from '@angular/core';
import { MdMenuTrigger } from "@angular/material";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  constructor() { }

  ngOnInit() {
  }

}
