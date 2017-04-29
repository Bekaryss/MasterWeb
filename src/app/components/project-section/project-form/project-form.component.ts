import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Project } from "app/models/projects";
import { Department } from "app/models/departments";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  title: string = '';
  description: string = '';
  selectedValue: number = 1;
  project: Project = new Project();

  @Input() departments: Department[];
  @Output() create: EventEmitter<Project> = new EventEmitter();
  
  constructor() { }

  onSubmit(){
    this.project.title = this.title;
    this.project.description = this.description;
    this.project.departmentId = this.selectedValue;
    this.create.emit(this.project);
    this.project = new Project();
  }

  ngOnInit() {
  }

}
