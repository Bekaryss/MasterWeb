import { Injectable } from '@angular/core';
import { Department } from "app/models/departments";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class DepartmentService {
  private apiUrl = 'api/departments';

  private apiUrlShift = 'http://fit.kbtu.kz:7777/erp/departments/'

  constructor(private http: Http) { }

  getDepartments(): Observable<Department[]> {   
    return this.http.get(this.apiUrlShift).map(res => res.json().data as Department[]).catch(this.handleError);
  }

  createDepartment(department: Department){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers });
    return this.http.post(this.apiUrl, department, options).map(res => res.json().data as Department).catch(this.handleError);   
}

  deleteDepartment(department: Department){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers });
    let url = `${this.apiUrl}/${department.id}`;
    return this.http.delete(url, headers).catch(this.handleError);
  }


  private handleError(error: any) {
    console.error('Some error!!!', error);
    return Observable.throw(error.message || error);
  }
}
