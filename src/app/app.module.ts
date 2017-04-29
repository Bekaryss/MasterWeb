import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import 'hammerjs';
import { AppComponent } from './app.component';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { MainComponent } from "./components/main/main.component";
import { InfoCardComponent } from './components/info-card/info-card.component';
import { MenuGroupComponent } from './components/menu-group/menu-group.component';
import { DepartmentComponent } from './components/department-section/department/department.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { InfoLeftMenuComponent } from './components/info-left-menu/info-left-menu.component';
import { DepartmentListComponent } from './components/department-section/department-list/department-list.component';
import { DepartmentFormComponent } from './components/department-section/department-form/department-form.component';
import { SettingsSectionComponent } from './settings-section/settings-section.component';
import { DepartmentDetailsComponent } from './components/department-section/department-details/department-details.component';
import { InMemoryDataService } from "app/models/dbservice";
import { DepartmentService } from "app/services/department.service";
import { DepartmentItemComponent } from './components/department-section/department-item/department-item.component';
import { TasksComponent } from './components/task-section/tasks/tasks.component';
import { TaskFormComponent } from './components/task-section/task-form/task-form.component';
import { TaskListComponent } from './components/task-section/task-list/task-list.component';
import { TaskItemComponent } from './components/task-section/task-item/task-item.component';
import { TaskService } from "app/services/task.service";
import { CustomerService } from "app/services/customer.service";
import { CustomerListComponent } from './components/customer-section/customer-list/customer-list.component';
import { CustomersComponent } from './components/customer-section/customers/customers.component';
import { CustomerItemComponent } from './components/customer-section/customer-item/customer-item.component';
import { ProjectService } from "app/services/project.service";
import { ProjectsComponent } from './components/project-section/projects/projects.component';
import { ProjectFormComponent } from './components/project-section/project-form/project-form.component';
import { ProjectListComponent } from './components/project-section/project-list/project-list.component';
import { ProjectItemComponent } from './components/project-section/project-item/project-item.component';
import { DashboardComponent } from './components/dashboard-section/dashboard/dashboard.component';
import { DashDepartmentListComponent } from './components/dashboard-section/dash-department-list/dash-department-list.component';
import { DashTaskListComponent } from './components/dashboard-section/dash-task-list/dash-task-list.component';
import { DashProjectListComponent } from './components/dashboard-section/dash-project-list/dash-project-list.component';



const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: InfoSectionComponent,
        children: [
          {
            path: '',
            component: DashboardComponent,
            children: [
              {
                path: '',
                component: DashDepartmentListComponent
              },
              {
                path: 'projects/:id',
                component: DashProjectListComponent
              },
              {
                path: 'tasks/:id1/:id2',
                component: DashTaskListComponent
              },
            ]
          },
          {
            path: 'department',
            component: DepartmentComponent
          },
          {
            path: 'projects',
            component: ProjectsComponent
          },
          {
            path: 'tasks',
            component: TasksComponent
          },
        ]
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'settings',
        component: SettingsSectionComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InfoCardComponent,
    MenuGroupComponent,
    InfoSectionComponent,
    InfoLeftMenuComponent,
    SettingsSectionComponent,
    DepartmentComponent,
    DepartmentListComponent,
    DepartmentFormComponent,
    DepartmentDetailsComponent,
    DepartmentItemComponent,
    TasksComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskItemComponent,
    CustomerListComponent,
    CustomersComponent,
    CustomerItemComponent,
    ProjectsComponent,
    ProjectFormComponent,
    ProjectListComponent,
    ProjectItemComponent,
    DashboardComponent,
    DashDepartmentListComponent,
    DashTaskListComponent,
    DashProjectListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes),
   InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],

  providers: [DepartmentService, TaskService, CustomerService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
