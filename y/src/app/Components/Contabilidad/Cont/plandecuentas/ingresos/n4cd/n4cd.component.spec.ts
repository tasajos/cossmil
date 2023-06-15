import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N4cdComponent } from './n4cd.component';

describe('N4cdComponent', () => {
  let component: N4cdComponent;
  let fixture: ComponentFixture<N4cdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N4cdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N4cdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
