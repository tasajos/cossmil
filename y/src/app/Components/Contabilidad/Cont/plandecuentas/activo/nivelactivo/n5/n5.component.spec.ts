import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N5Component } from './n5.component';

describe('N5Component', () => {
  let component: N5Component;
  let fixture: ComponentFixture<N5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
