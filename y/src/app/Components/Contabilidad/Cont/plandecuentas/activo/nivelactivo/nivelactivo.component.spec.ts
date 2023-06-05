import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelactivoComponent } from './nivelactivo.component';

describe('NivelactivoComponent', () => {
  let component: NivelactivoComponent;
  let fixture: ComponentFixture<NivelactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelactivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
