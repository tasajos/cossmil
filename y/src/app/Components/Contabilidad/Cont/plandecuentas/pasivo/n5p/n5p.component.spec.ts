import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N5pComponent } from './n5p.component';

describe('N5pComponent', () => {
  let component: N5pComponent;
  let fixture: ComponentFixture<N5pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N5pComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N5pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
