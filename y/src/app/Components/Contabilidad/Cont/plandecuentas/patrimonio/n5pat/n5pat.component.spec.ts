import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N5patComponent } from './n5pat.component';

describe('N5patComponent', () => {
  let component: N5patComponent;
  let fixture: ComponentFixture<N5patComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N5patComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N5patComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
