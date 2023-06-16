import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N4coComponent } from './n4co.component';

describe('N4coComponent', () => {
  let component: N4coComponent;
  let fixture: ComponentFixture<N4coComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N4coComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N4coComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
