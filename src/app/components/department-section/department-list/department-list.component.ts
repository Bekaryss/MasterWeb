import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { department } from "app/models/departments";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent {
  @Input() departments: department[];
  @Output() delete: EventEmitter<department> = new EventEmitter();
  @Output() select: EventEmitter<department> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onDelete(department: department){
    this.delete.emit(department);
  }

  onSelect(department: department){
    this.select.emit(department);
  }

}
