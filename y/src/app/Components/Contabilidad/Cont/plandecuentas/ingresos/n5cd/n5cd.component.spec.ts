import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N5cdComponent } from './n5cd.component';

describe('N5cdComponent', () => {
  let component: N5cdComponent;
  let fixture: ComponentFixture<N5cdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N5cdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N5cdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
