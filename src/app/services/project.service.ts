import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Project } from "app/models/projects";

@Injectable()
export class ProjectService {
  private apiUrl = 'api/projects';
  private apiUrlShift = 'http://fit.kbtu.kz:7777/erp/projects/';

  constructor(private http: Http) { }

  getProjects(): Observable<Project[]> {
    return this.http.get(this.apiUrlShift).map(res => res.json() as Project[]).catch(this.handleError);
  }

  getProjectsById(id: number): Observable<Project[]> {
    return this.getProjects()
      .map(project => project.filter(proj => proj.departmentId == id));
  }

  createProject(project: Project){
    return this.http.post(this.apiUrlShift + 'add/', JSON.stringify(project), this.jwt()).map(res => res.json().data as Project).catch(this.handleError);
  }

   deleteProject(project: Project){
    let url = `${this.apiUrlShift}delete/${project.id.toString()}/`;
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

