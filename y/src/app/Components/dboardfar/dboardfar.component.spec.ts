import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DboardfarComponent } from './dboardfar.component';

describe('DboardfarComponent', () => {
  let component: DboardfarComponent;
  let fixture: ComponentFixture<DboardfarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DboardfarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DboardfarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
