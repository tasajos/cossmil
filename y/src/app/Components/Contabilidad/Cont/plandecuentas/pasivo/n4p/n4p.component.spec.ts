import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N4pComponent } from './n4p.component';

describe('N4pComponent', () => {
  let component: N4pComponent;
  let fixture: ComponentFixture<N4pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N4pComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N4pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
