import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N3coComponent } from './n3co.component';

describe('N3coComponent', () => {
  let component: N3coComponent;
  let fixture: ComponentFixture<N3coComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N3coComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N3coComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
