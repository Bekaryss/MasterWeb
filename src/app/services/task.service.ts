import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Task } from "app/models/tasks";
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class TaskService {
  private apiUrl = 'api/tasks';

  constructor(private http: Http) { }
  getTasks(): Observable<Task[]> {
    return this.http.get(this.apiUrl).map(res => res.json().data as Task[]).catch(this.handleError);
  }

  createTask(task: Task){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers });
    return this.http.post(this.apiUrl, task, options).map(res => res.json().data as Task).catch(this.handleError);
  }

  deleteTask(task: Task){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers });
    let url = `${this.apiUrl}/${task.id}`;
    return this.http.delete(url, headers).catch(this.handleError);
  }


  private handleError(error: any) {
    console.error('Some error!!!', error);
    return Observable.throw(error.message || error);
  }
}
