import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajamodalComponent } from './cajamodal.component';

describe('CajamodalComponent', () => {
  let component: CajamodalComponent;
  let fixture: ComponentFixture<CajamodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajamodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajamodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
