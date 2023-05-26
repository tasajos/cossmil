import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroscontablesComponent } from './libroscontables.component';

describe('LibroscontablesComponent', () => {
  let component: LibroscontablesComponent;
  let fixture: ComponentFixture<LibroscontablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroscontablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroscontablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
