import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionestComponent } from './opcionest.component';

describe('OpcionestComponent', () => {
  let component: OpcionestComponent;
  let fixture: ComponentFixture<OpcionestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcionestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
