import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R2tComponent } from './r2t.component';

describe('R2tComponent', () => {
  let component: R2tComponent;
  let fixture: ComponentFixture<R2tComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R2tComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(R2tComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
