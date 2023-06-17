import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGralComponent } from './dashboard-gral.component';

describe('DashboardGralComponent', () => {
  let component: DashboardGralComponent;
  let fixture: ComponentFixture<DashboardGralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
