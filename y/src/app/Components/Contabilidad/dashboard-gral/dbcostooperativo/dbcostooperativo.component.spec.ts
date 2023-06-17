import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbcostooperativoComponent } from './dbcostooperativo.component';

describe('DbcostooperativoComponent', () => {
  let component: DbcostooperativoComponent;
  let fixture: ComponentFixture<DbcostooperativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbcostooperativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbcostooperativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
