import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N3cdComponent } from './n3cd.component';

describe('N3cdComponent', () => {
  let component: N3cdComponent;
  let fixture: ComponentFixture<N3cdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N3cdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N3cdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
