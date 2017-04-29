import { Component, OnInit } from '@angular/core';
import { Project } from "app/models/projects";
import { ProjectService } from "app/services/project.service";
import { Department } from "app/models/departments";
import { DepartmentService } from "app/services/department.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  departments: Department[];
  constructor(private projService: ProjectService, private depService: DepartmentService) { }

  ngOnInit() {
    this.projService.getProjects().subscribe(proj => this.projects = proj);
    this.depService.getDepartments().subscribe(proj => this.departments = proj);
  }

  create(project: Project) {
    this.projService.createTask(project).subscribe(res => this.projects.push(project));
  }

  delete(project: Project) {
    this.projService.deleteTask(project).subscribe(res => {
      let index = this.projects.indexOf(project);

      if (index > -1) {
        this.projects.splice(index, 1);
      }
    });
  }
}
