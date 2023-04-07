import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoEsencialComponent } from './medicamento-esencial.component';

describe('MedicamentoEsencialComponent', () => {
  let component: MedicamentoEsencialComponent;
  let fixture: ComponentFixture<MedicamentoEsencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentoEsencialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicamentoEsencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
