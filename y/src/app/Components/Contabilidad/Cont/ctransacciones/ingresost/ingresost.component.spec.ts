import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresostComponent } from './ingresost.component';

describe('IngresostComponent', () => {
  let component: IngresostComponent;
  let fixture: ComponentFixture<IngresostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
