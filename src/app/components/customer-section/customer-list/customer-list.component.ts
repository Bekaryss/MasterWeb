import { Component, OnInit, Input } from '@angular/core';
import { Customer } from "app/models/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  @Input() customers: Customer[];
  constructor() { }

  ngOnInit() {
  }

}
