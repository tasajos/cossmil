import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N6pComponent } from './n6p.component';

describe('N6pComponent', () => {
  let component: N6pComponent;
  let fixture: ComponentFixture<N6pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N6pComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N6pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
