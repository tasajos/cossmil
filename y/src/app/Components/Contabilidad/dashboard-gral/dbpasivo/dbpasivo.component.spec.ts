import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbpasivoComponent } from './dbpasivo.component';

describe('DbpasivoComponent', () => {
  let component: DbpasivoComponent;
  let fixture: ComponentFixture<DbpasivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbpasivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbpasivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
