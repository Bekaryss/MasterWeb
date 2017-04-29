import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Task } from "app/models/tasks";
import { Department } from "app/models/departments";
import { Project } from "app/models/projects";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  title: string = '';
  description: string = '';
  selectedValue: number = 1;
  selectedProj: number = 1;
  task: Task = new Task();

  @Input() departments: Department[];
  @Input() projects: Project[]; 

  @Output() create: EventEmitter<Task> = new EventEmitter();
  @Output() select: EventEmitter<number> = new EventEmitter();
  constructor() { }

  onSelect(id: number){
    this.select.emit(id);
  }

  onSubmit(){
    this.task.title = this.title;
    this.task.description = this.description;
    this.task.departmentId = this.selectedValue;
    this.task.projectId = this.selectedProj;
    this.create.emit(this.task);
    this.task = new Task();
  }

  ngOnInit() {
  }

}
