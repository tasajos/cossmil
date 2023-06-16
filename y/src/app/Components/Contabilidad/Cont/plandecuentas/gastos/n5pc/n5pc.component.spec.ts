import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N5pcComponent } from './n5pc.component';

describe('N5pcComponent', () => {
  let component: N5pcComponent;
  let fixture: ComponentFixture<N5pcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N5pcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N5pcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
