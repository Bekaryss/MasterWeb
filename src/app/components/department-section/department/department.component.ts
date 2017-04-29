import { Component, OnInit } from '@angular/core';
import { Department } from "app/models/departments";
import { DepartmentService } from '../../../services/department.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  departments: Department[];
  selectedDepartment: Department;

  constructor(private depService: DepartmentService) { }

  ngOnInit() {
    this.depService.getDepartments().subscribe(des => this.departments = des);
    console.log(this.departments);
  } 

  create(department: Department) {
    department.id = this.departments.length + 1;
    this.depService.createDepartment(department).subscribe(res => this.departments.push(department));
  }

  delete(department: Department){
    this.depService.deleteDepartment(department).subscribe(res => {
      let index = this.departments.indexOf(department);

      if(index > -1){
        this.departments.splice(index, 1);
      }
    });
  }

  select(department: Department) {
    this.selectedDepartment = department;
  }

}
