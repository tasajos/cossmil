import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpacienteComponent } from './lpaciente.component';

describe('LpacienteComponent', () => {
  let component: LpacienteComponent;
  let fixture: ComponentFixture<LpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
