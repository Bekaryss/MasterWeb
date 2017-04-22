import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { department } from "app/models/departments";
import * as _ from 'lodash';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {
  title: string = '';
  department: department = new department();

  @Output() create: EventEmitter<department> = new EventEmitter();
  constructor() { }
  onSubmit(){
    this.department.title = this.title;
    this.create.emit(_(this.department).cloneDeep());
  }

  ngOnInit() {
  }

}
