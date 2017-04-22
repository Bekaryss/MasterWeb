import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from "app/models/tasks";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  title: string = '';
  task: Task = new Task();

  @Output() create: EventEmitter<Task> = new EventEmitter();
  constructor() { }

  onSubmit(){
    this.task.title = this.title;
    this.create.emit(this.task);
    this.task = new Task();
  }

  ngOnInit() {
  }

}
