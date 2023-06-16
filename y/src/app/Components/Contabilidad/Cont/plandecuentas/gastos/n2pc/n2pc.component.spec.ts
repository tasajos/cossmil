import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N2pcComponent } from './n2pc.component';

describe('N2pcComponent', () => {
  let component: N2pcComponent;
  let fixture: ComponentFixture<N2pcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N2pcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N2pcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
