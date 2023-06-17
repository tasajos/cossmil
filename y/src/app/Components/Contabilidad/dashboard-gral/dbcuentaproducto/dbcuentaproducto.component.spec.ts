import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbcuentaproductoComponent } from './dbcuentaproducto.component';

describe('DbcuentaproductoComponent', () => {
  let component: DbcuentaproductoComponent;
  let fixture: ComponentFixture<DbcuentaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbcuentaproductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbcuentaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
