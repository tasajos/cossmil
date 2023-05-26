import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlandecuentasComponent } from './plandecuentas.component';

describe('PlandecuentasComponent', () => {
  let component: PlandecuentasComponent;
  let fixture: ComponentFixture<PlandecuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlandecuentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlandecuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
