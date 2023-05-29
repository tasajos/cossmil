import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaactivoComponent } from './guiaactivo.component';

describe('GuiaactivoComponent', () => {
  let component: GuiaactivoComponent;
  let fixture: ComponentFixture<GuiaactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiaactivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiaactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
