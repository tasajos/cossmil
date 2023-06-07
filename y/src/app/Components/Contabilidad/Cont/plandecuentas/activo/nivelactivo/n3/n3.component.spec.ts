import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N3Component } from './n3.component';

describe('N3Component', () => {
  let component: N3Component;
  let fixture: ComponentFixture<N3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
