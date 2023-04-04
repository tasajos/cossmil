import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarmailComponent } from './verificarmail.component';

describe('VerificarmailComponent', () => {
  let component: VerificarmailComponent;
  let fixture: ComponentFixture<VerificarmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
