import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadocajachicaComponent } from './estadocajachica.component';

describe('EstadocajachicaComponent', () => {
  let component: EstadocajachicaComponent;
  let fixture: ComponentFixture<EstadocajachicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadocajachicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadocajachicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
