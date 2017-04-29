import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from "app/models/projects";
import { Department } from "app/models/departments";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: Project;
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(){
    this.delete.emit(this.project);
  }
}
