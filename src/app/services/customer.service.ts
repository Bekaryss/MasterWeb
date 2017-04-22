import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { Customer } from "app/models/customer";

@Injectable()
export class CustomerService {
  private apiUrl = 'api/customers';

  constructor(private http: Http) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get(this.apiUrl).map(res => res.json().data as Customer[]).catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('Some error!!!', error);
    return Observable.throw(error.message || error);
  }
}
