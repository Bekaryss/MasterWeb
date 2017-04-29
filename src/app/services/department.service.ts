import { Injectable } from '@angular/core';
import { Department } from "app/models/departments";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class DepartmentService {
  private apiUrl = 'api/departments';
  private apiUrlShift = 'http://fit.kbtu.kz:7777/erp/departments/';

  constructor(private http: Http) { }

  getDepartments(): Observable<Department[]> {   
    return this.http.get(this.apiUrlShift).map(res => res.json() as Department[]).catch(this.handleError);
  }

  createDepartment(department: Department){
    department.image = null;
    return this.http.post(this.apiUrlShift + 'add/', JSON.stringify(department), this.jwt()).map(res => res.json() as Department).catch(this.handleError);   
}

  deleteDepartment(department: Department){
    let url = this.apiUrlShift +'delete/' + department.id.toString() + '/';
    return this.http.post(url, null, this.jwt()).catch(this.handleError);
  }


  private handleError(error: any) {
    console.error('Some error!!!', error);
    return Observable.throw(error.message || error);
  }

  private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            console.log(currentUser.token);
            let headers = new Headers({ 'Content-Type': 'application/json',
                                        'Authorization': 'JWT ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
