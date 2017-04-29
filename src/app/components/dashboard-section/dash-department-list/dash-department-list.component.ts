import { Component, OnInit } from '@angular/core';
import { Department } from "app/models/departments";
import { DepartmentService } from "app/services/department.service";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";


@Component({
  selector: 'app-dash-department-list',
  templateUrl: './dash-department-list.component.html',
  styleUrls: ['./dash-department-list.component.scss'],
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
export class DashDepartmentListComponent implements OnInit {
  departments: Department[];

  constructor(private depService: DepartmentService) { }

  ngOnInit() {

    this.depService.getDepartments().subscribe(des => this.departments = des);
  }

}
