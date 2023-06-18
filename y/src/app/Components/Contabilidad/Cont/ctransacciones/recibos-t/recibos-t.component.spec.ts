import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibosTComponent } from './recibos-t.component';

describe('RecibosTComponent', () => {
  let component: RecibosTComponent;
  let fixture: ComponentFixture<RecibosTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibosTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibosTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
