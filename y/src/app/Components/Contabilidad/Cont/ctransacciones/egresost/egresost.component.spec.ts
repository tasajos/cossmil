import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresostComponent } from './egresost.component';

describe('EgresostComponent', () => {
  let component: EgresostComponent;
  let fixture: ComponentFixture<EgresostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgresostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgresostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
