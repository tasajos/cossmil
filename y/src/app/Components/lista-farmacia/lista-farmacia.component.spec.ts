import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFarmaciaComponent } from './lista-farmacia.component';

describe('ListaFarmaciaComponent', () => {
  let component: ListaFarmaciaComponent;
  let fixture: ComponentFixture<ListaFarmaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFarmaciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
