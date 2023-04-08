import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarinterComponent } from './navbarinter.component';

describe('NavbarinterComponent', () => {
  let component: NavbarinterComponent;
  let fixture: ComponentFixture<NavbarinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarinterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
