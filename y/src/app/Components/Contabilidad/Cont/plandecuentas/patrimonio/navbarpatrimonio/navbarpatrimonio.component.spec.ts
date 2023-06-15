import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarpatrimonioComponent } from './navbarpatrimonio.component';

describe('NavbarpatrimonioComponent', () => {
  let component: NavbarpatrimonioComponent;
  let fixture: ComponentFixture<NavbarpatrimonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarpatrimonioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarpatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
