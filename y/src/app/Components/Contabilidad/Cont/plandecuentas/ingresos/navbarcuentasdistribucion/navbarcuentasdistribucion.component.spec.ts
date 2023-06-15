import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcuentasdistribucionComponent } from './navbarcuentasdistribucion.component';

describe('NavbarcuentasdistribucionComponent', () => {
  let component: NavbarcuentasdistribucionComponent;
  let fixture: ComponentFixture<NavbarcuentasdistribucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcuentasdistribucionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarcuentasdistribucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
