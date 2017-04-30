import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Task } from "app/models/tasks";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from "app/models/user";

@Injectable()
export class TaskService {
  private apiUrl = 'api/tasks';
  private apiUrlShift = 'http://fit.kbtu.kz:7777/erp/task/';

  constructor(private http: Http) { }
  getTasks(): Observable<Task[]> {
    return this.http.get(this.apiUrlShift).map((res: Response) => res.json() as Task[]).catch(this.handleError);
  }

  getTasksById(id: number): Observable<Task[]> {
    return this.getTasks()
      .map(task => task.filter(tas => tas.projectId == id));
  }

  createTask(task: Task){
    return this.http.post(this.apiUrlShift + 'add/', JSON.stringify(task), this.jwt()).map(res => res.json() as Task).catch(this.handleError);
  }

  deleteTask(task: Task){
    let url = `${this.apiUrlShift}delete/${task.id}/`;
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
