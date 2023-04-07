import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercirugiaComponent } from './vercirugia.component';

describe('VercirugiaComponent', () => {
  let component: VercirugiaComponent;
  let fixture: ComponentFixture<VercirugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VercirugiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VercirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
