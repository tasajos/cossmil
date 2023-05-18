import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcontabilidadComponent } from './navbarcontabilidad.component';

describe('NavbarcontabilidadComponent', () => {
  let component: NavbarcontabilidadComponent;
  let fixture: ComponentFixture<NavbarcontabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcontabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarcontabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
