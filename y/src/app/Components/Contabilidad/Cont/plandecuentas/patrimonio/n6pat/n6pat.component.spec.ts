import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N6patComponent } from './n6pat.component';

describe('N6patComponent', () => {
  let component: N6patComponent;
  let fixture: ComponentFixture<N6patComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N6patComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N6patComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
