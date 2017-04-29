import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Department } from "app/models/departments";

@Component({
  moduleId: module.id,
  selector: 'app-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.scss']
})
export class DepartmentItemComponent implements OnInit {
  @Input() department: Department;
  @Output() delete = new EventEmitter();
  @Output() select = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onDelete(){
    this.delete.emit(this.department);
  }
  onSelect(){
    this.select.emit(this.department);
  }

}
