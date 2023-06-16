import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N5coComponent } from './n5co.component';

describe('N5coComponent', () => {
  let component: N5coComponent;
  let fixture: ComponentFixture<N5coComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N5coComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N5coComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
