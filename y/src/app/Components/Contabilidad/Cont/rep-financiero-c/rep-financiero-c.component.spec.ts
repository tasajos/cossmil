import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepFinancieroCComponent } from './rep-financiero-c.component';

describe('RepFinancieroCComponent', () => {
  let component: RepFinancieroCComponent;
  let fixture: ComponentFixture<RepFinancieroCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepFinancieroCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepFinancieroCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
