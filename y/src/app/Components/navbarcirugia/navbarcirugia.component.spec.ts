import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcirugiaComponent } from './navbarcirugia.component';

describe('NavbarcirugiaComponent', () => {
  let component: NavbarcirugiaComponent;
  let fixture: ComponentFixture<NavbarcirugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcirugiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarcirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
