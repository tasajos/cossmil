import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdipacienteComponent } from './edipaciente.component';

describe('EdipacienteComponent', () => {
  let component: EdipacienteComponent;
  let fixture: ComponentFixture<EdipacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdipacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdipacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
