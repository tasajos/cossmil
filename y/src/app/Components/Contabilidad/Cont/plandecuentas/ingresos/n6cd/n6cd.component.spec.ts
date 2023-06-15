import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N6cdComponent } from './n6cd.component';

describe('N6cdComponent', () => {
  let component: N6cdComponent;
  let fixture: ComponentFixture<N6cdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N6cdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N6cdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
