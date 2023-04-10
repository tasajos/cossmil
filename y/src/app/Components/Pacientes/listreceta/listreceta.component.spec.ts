import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrecetaComponent } from './listreceta.component';

describe('ListrecetaComponent', () => {
  let component: ListrecetaComponent;
  let fixture: ComponentFixture<ListrecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrecetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListrecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
