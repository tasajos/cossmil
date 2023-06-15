import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N2patComponent } from './n2pat.component';

describe('N2patComponent', () => {
  let component: N2patComponent;
  let fixture: ComponentFixture<N2patComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N2patComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N2patComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
