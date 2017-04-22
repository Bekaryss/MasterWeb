import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "app/models/tasks";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() delete = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onDelete(){
    this.delete.emit(this.task);
  }

}
