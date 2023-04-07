import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEsencialComponent } from './lista-esencial.component';

describe('ListaEsencialComponent', () => {
  let component: ListaEsencialComponent;
  let fixture: ComponentFixture<ListaEsencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEsencialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEsencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
