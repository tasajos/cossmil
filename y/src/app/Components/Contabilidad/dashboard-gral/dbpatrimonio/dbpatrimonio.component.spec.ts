import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbpatrimonioComponent } from './dbpatrimonio.component';

describe('DbpatrimonioComponent', () => {
  let component: DbpatrimonioComponent;
  let fixture: ComponentFixture<DbpatrimonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbpatrimonioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbpatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
