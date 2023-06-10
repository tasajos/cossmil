import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarpasivoComponent } from './navbarpasivo.component';

describe('NavbarpasivoComponent', () => {
  let component: NavbarpasivoComponent;
  let fixture: ComponentFixture<NavbarpasivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarpasivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarpasivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
