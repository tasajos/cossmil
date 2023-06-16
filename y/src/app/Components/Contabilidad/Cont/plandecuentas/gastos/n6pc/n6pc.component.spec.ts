import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N6pcComponent } from './n6pc.component';

describe('N6pcComponent', () => {
  let component: N6pcComponent;
  let fixture: ComponentFixture<N6pcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N6pcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N6pcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
