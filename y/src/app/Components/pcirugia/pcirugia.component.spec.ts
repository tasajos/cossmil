import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcirugiaComponent } from './pcirugia.component';

describe('PcirugiaComponent', () => {
  let component: PcirugiaComponent;
  let fixture: ComponentFixture<PcirugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcirugiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
