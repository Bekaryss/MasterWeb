import { Component, OnInit } from '@angular/core';
import { Task } from "app/models/tasks";
import { TaskService } from "app/services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tas => this.tasks = tas);
  }

  create(task: Task) {
    this.taskService.createTask(task).subscribe(res => this.tasks.push(task));
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
