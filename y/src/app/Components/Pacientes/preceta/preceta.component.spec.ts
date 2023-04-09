import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecetaComponent } from './preceta.component';

describe('PrecetaComponent', () => {
  let component: PrecetaComponent;
  let fixture: ComponentFixture<PrecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
