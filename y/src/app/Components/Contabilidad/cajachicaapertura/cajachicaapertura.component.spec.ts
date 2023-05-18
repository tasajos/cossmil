import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajachicaaperturaComponent } from './cajachicaapertura.component';

describe('CajachicaaperturaComponent', () => {
  let component: CajachicaaperturaComponent;
  let fixture: ComponentFixture<CajachicaaperturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajachicaaperturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajachicaaperturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
