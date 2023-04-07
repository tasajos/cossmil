import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacirugiaComponent } from './listacirugia.component';

describe('ListacirugiaComponent', () => {
  let component: ListacirugiaComponent;
  let fixture: ComponentFixture<ListacirugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacirugiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListacirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
