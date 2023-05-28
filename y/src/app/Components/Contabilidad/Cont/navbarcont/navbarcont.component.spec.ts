import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcontComponent } from './navbarcont.component';

describe('NavbarcontComponent', () => {
  let component: NavbarcontComponent;
  let fixture: ComponentFixture<NavbarcontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarcontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
