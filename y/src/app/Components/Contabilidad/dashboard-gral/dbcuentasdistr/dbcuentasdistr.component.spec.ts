import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbcuentasdistrComponent } from './dbcuentasdistr.component';

describe('DbcuentasdistrComponent', () => {
  let component: DbcuentasdistrComponent;
  let fixture: ComponentFixture<DbcuentasdistrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbcuentasdistrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbcuentasdistrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
