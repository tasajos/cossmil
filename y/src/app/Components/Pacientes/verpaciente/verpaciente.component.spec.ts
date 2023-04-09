import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpacienteComponent } from './verpaciente.component';

describe('VerpacienteComponent', () => {
  let component: VerpacienteComponent;
  let fixture: ComponentFixture<VerpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerpacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
