import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N4patComponent } from './n4pat.component';

describe('N4patComponent', () => {
  let component: N4patComponent;
  let fixture: ComponentFixture<N4patComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N4patComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N4patComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
