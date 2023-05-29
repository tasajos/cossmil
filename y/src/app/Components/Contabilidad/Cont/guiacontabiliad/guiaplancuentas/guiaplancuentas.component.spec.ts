import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaplancuentasComponent } from './guiaplancuentas.component';

describe('GuiaplancuentasComponent', () => {
  let component: GuiaplancuentasComponent;
  let fixture: ComponentFixture<GuiaplancuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiaplancuentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiaplancuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
