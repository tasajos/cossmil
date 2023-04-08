import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternacionComponent } from './internacion.component';

describe('InternacionComponent', () => {
  let component: InternacionComponent;
  let fixture: ComponentFixture<InternacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
