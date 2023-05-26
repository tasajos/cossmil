import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTRANSACCIONESComponent } from './ctransacciones.component';

describe('CTRANSACCIONESComponent', () => {
  let component: CTRANSACCIONESComponent;
  let fixture: ComponentFixture<CTRANSACCIONESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTRANSACCIONESComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTRANSACCIONESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
