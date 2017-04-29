import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Department } from "app/models/departments";
import * as _ from 'lodash';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {
  title: string = '';
  description: string = '';
  department: Department = new Department();

  @Output() create: EventEmitter<Department> = new EventEmitter();
  constructor() { }
  onSubmit(){
    this.department.title = this.title;
    this.department.description = this.description;
    this.create.emit(this.department);
    this.department = new Department();
  }

  ngOnInit() {
  }

}
