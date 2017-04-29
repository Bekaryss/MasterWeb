import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Project } from "app/models/projects";

@Injectable()
export class ProjectService {
  private apiUrl = 'api/projects';

  constructor(private http: Http) { }

  getProjects(): Observable<Project[]> {
    return this.http.get(this.apiUrl).map(res => res.json().data as Project[]).catch(this.handleError);
  }

  getProjectsById(id: number): Observable<Project[]> {
    return this.getProjects()
      .map(project => project.filter(proj => proj.departmentId == id));
  }

  createTask(project: Project){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers });
    return this.http.post(this.apiUrl, project, options).map(res => res.json().data as Project).catch(this.handleError);
  }

   deleteTask(project: Project){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers });
    let url = `${this.apiUrl}/${project.id}`;
    return this.http.delete(url, headers).catch(this.handleError);
  }

   private handleError(error: any) {
    console.error('Some error!!!', error);
    return Observable.throw(error.message || error);
  }
}

