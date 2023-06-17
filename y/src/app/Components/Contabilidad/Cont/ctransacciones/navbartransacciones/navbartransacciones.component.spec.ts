import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbartransaccionesComponent } from './navbartransacciones.component';

describe('NavbartransaccionesComponent', () => {
  let component: NavbartransaccionesComponent;
  let fixture: ComponentFixture<NavbartransaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbartransaccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbartransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
