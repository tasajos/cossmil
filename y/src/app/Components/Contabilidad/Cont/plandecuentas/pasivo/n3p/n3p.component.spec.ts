import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N3pComponent } from './n3p.component';

describe('N3pComponent', () => {
  let component: N3pComponent;
  let fixture: ComponentFixture<N3pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N3pComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N3pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
