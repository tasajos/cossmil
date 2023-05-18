import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalcComponent } from './principalc.component';

describe('PrincipalcComponent', () => {
  let component: PrincipalcComponent;
  let fixture: ComponentFixture<PrincipalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
