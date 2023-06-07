import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N6Component } from './n6.component';

describe('N6Component', () => {
  let component: N6Component;
  let fixture: ComponentFixture<N6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
