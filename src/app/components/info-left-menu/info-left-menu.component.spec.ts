import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLeftMenuComponent } from './info-left-menu.component';

describe('InfoLeftMenuComponent', () => {
  let component: InfoLeftMenuComponent;
  let fixture: ComponentFixture<InfoLeftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoLeftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
