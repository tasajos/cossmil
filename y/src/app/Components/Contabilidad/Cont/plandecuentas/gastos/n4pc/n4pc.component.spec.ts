import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N4pcComponent } from './n4pc.component';

describe('N4pcComponent', () => {
  let component: N4pcComponent;
  let fixture: ComponentFixture<N4pcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N4pcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N4pcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
