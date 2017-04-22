import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Task } from "app/models/tasks";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[];
  @Output() delete: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(task: Task){
    this.delete.emit(task);
  }

}
