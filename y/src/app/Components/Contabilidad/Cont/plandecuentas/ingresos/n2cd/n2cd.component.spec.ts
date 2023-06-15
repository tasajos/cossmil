import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N2cdComponent } from './n2cd.component';

describe('N2cdComponent', () => {
  let component: N2cdComponent;
  let fixture: ComponentFixture<N2cdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N2cdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N2cdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
