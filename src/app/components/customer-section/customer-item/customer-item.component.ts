import { Component, OnInit, Input } from '@angular/core';
import { Customer } from "app/models/customer";

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss']
})
export class CustomerItemComponent implements OnInit {
  @Input() customer: Customer;
  constructor() { }
  //saf
  ngOnInit() {
  }

}
