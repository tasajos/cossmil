import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorpComponent } from './monitorp.component';

describe('MonitorpComponent', () => {
  let component: MonitorpComponent;
  let fixture: ComponentFixture<MonitorpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
