import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUIComponent } from './login-ui.component';

describe('LoginUIComponent', () => {
  let component: LoginUIComponent;
  let fixture: ComponentFixture<LoginUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
