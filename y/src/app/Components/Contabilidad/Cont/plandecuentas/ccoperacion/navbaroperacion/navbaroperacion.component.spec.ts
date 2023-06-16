import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaroperacionComponent } from './navbaroperacion.component';

describe('NavbaroperacionComponent', () => {
  let component: NavbaroperacionComponent;
  let fixture: ComponentFixture<NavbaroperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbaroperacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbaroperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
