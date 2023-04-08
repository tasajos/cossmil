import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpacienteComponent } from './rpaciente.component';

describe('RpacienteComponent', () => {
  let component: RpacienteComponent;
  let fixture: ComponentFixture<RpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
