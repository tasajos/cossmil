import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosfinancierosComponent } from './estadosfinancieros.component';

describe('EstadosfinancierosComponent', () => {
  let component: EstadosfinancierosComponent;
  let fixture: ComponentFixture<EstadosfinancierosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosfinancierosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadosfinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
