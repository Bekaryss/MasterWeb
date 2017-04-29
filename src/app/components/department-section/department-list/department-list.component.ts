import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Department } from "app/models/departments";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent {
  @Input() departments: Department[];
  @Output() delete: EventEmitter<Department> = new EventEmitter();
  @Output() select: EventEmitter<Department> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onDelete(department: Department){
    this.delete.emit(department);
  }

  onSelect(department: Department){
    this.select.emit(department);
  }

}
