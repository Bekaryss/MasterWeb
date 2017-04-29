import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDepartmentListComponent } from './dash-department-list.component';

describe('DashDepartmentListComponent', () => {
  let component: DashDepartmentListComponent;
  let fixture: ComponentFixture<DashDepartmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashDepartmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashDepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
