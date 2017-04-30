import { Component, OnInit } from '@angular/core';
import { Task } from "app/models/tasks";
import { TaskService } from "app/services/task.service";
import { DepartmentService } from "app/services/department.service";
import { ProjectService } from "app/services/project.service";
import { Project } from "app/models/projects";
import { Department } from "app/models/departments";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  task: Task;
  departments: Department[];
  projects: Project[];

  constructor(private taskService: TaskService, private depService: DepartmentService, private projService: ProjectService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tas => this.tasks = tas);
    this.depService.getDepartments().subscribe(dep => this.departments = dep);
    this.select(1);
}

  select(id: number){
    this.projService.getProjectsById(id).subscribe(proj => this.projects = proj);
  }

  create(task: Task) {
    task.id = this.tasks.length + 1;
    this.taskService.createTask(task).subscribe(tas => this.tasks.push(task));
  }

  delete(task: Task) {
    this.taskService.deleteTask(task).subscribe(res => {
      let index = this.tasks.indexOf(task);
      if (index > -1) {
        this.tasks.splice(index, 1);
      }
    });
  }
  
}
