import { Component, OnInit } from '@angular/core';
import { Task } from "app/models/tasks";
import { TaskService } from "app/services/task.service";
import { ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: 'app-dash-task-list',
  templateUrl: './dash-task-list.component.html',
  styleUrls: ['./dash-task-list.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [  // before 2.1: transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [  // before 2.1: transition('* => void', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ],
    host: {
        '[@openClose]': 'true',
        'style': 'display: block;'
    },

})
export class DashTaskListComponent implements OnInit {
  tasks: Task[];
  id: number;
  depId: number;
  private sub: any;
  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
       this.id = +params['id1'];
        this.depId = +params['id2'];
       console.log(this.id);
       this.taskService.getTasksById(this.id).subscribe(tas => this.tasks = tas);
       console.log(this.tasks);
    });
  }

}
