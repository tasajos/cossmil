import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N2coComponent } from './n2co.component';

describe('N2coComponent', () => {
  let component: N2coComponent;
  let fixture: ComponentFixture<N2coComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N2coComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N2coComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
