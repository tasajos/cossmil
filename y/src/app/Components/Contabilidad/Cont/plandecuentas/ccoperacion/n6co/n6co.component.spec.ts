import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N6coComponent } from './n6co.component';

describe('N6coComponent', () => {
  let component: N6coComponent;
  let fixture: ComponentFixture<N6coComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N6coComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N6coComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
