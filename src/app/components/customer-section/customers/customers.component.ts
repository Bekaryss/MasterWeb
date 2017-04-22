import { Component, OnInit } from '@angular/core';
import { Customer } from "app/models/customer";
import { CustomerService } from "app/services/customer.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(cust => this.customers = cust);
  }

}
