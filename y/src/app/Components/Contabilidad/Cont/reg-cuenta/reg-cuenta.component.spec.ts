import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCuentaComponent } from './reg-cuenta.component';

describe('RegCuentaComponent', () => {
  let component: RegCuentaComponent;
  let fixture: ComponentFixture<RegCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegCuentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
