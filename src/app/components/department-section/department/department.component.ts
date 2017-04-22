import { Component, OnInit } from '@angular/core';
import { department } from "app/models/departments";
import { DepartmentService } from '../../../services/department.service';
import { Observable } from "rxjs/Observable";
import * as _ from 'lodash';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  departments: department[];
  selectedDepartment: department;

  constructor(private depService: DepartmentService) { }

  ngOnInit() {
    this.depService.getDepartments().subscribe(deps => this.departments = deps);
  }

  create(department: department) {
    this.depService.createDepartment(department).subscribe(res => {
      const newD = _(department).cloneDeep();
      this.departments.push(newD)
    });
  }

  delete(department: department){
    this.depService.deleteDepartment(department).subscribe(res => {
      let index = this.departments.indexOf(department);

      if(index > -1){
        this.departments.splice(index, 1);
      }
    });
  }

  select(department: department) {
    this.selectedDepartment = department;
  }

}
