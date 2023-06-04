import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeractivoComponent } from './veractivo.component';

describe('VeractivoComponent', () => {
  let component: VeractivoComponent;
  let fixture: ComponentFixture<VeractivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeractivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeractivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
