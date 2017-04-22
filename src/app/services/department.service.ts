import { Injectable } from '@angular/core';
import { department } from "app/models/departments";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class DepartmentService {
  private apiUrl = 'api/departments';

  constructor(private http: Http) { }

  getDepartments(): Observable<department[]> {
    return this.http.get(this.apiUrl).map(res => res.json().data as department[]).catch(this.handleError);
  }

  createDepartment(department: department){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers });
    return this.http.post(this.apiUrl, department, options).map(res => res.json().data as department).catch(this.handleError);
  }

  deleteDepartment(department: department){
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
