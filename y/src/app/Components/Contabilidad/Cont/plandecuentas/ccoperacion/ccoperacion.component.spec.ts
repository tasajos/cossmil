import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcoperacionComponent } from './ccoperacion.component';

describe('CcoperacionComponent', () => {
  let component: CcoperacionComponent;
  let fixture: ComponentFixture<CcoperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcoperacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcoperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
