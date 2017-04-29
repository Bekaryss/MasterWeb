import { Component, OnInit, Input } from '@angular/core';
import { Department } from "app/models/departments";

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {
  @Input() department: Department;
  
  constructor() { }

  ngOnInit() {
  }

}
