import { Component, OnInit } from '@angular/core';
import { Project } from "app/models/projects";
import { ProjectService } from "app/services/project.service";
import { ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: 'app-dash-project-list',
  templateUrl: './dash-project-list.component.html',
  styleUrls: ['./dash-project-list.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [  // before 2.1: transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [  // before 2.1: transition('* => void', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ],
    host: {
        '[@openClose]': 'true',
        'style': 'display: block;'
    },
})
export class DashProjectListComponent implements OnInit {
  projects: Project[];
  id: number;
  private sub: any;
  constructor(private projService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.projService.getProjectsById(this.id).subscribe(proj => this.projects = proj);
    });
    
  }

}
