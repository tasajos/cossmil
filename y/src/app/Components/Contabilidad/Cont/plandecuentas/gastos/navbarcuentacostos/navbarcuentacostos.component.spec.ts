import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcuentacostosComponent } from './navbarcuentacostos.component';

describe('NavbarcuentacostosComponent', () => {
  let component: NavbarcuentacostosComponent;
  let fixture: ComponentFixture<NavbarcuentacostosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcuentacostosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarcuentacostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
