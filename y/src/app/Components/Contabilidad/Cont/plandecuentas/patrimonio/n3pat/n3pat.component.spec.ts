import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N3patComponent } from './n3pat.component';

describe('N3patComponent', () => {
  let component: N3patComponent;
  let fixture: ComponentFixture<N3patComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N3patComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N3patComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
