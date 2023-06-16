import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N3pcComponent } from './n3pc.component';

describe('N3pcComponent', () => {
  let component: N3pcComponent;
  let fixture: ComponentFixture<N3pcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N3pcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N3pcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
