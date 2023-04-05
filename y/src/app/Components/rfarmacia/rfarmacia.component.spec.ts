import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfarmaciaComponent } from './rfarmacia.component';

describe('RfarmaciaComponent', () => {
  let component: RfarmaciaComponent;
  let fixture: ComponentFixture<RfarmaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfarmaciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
