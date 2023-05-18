import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajachicacierreComponent } from './cajachicacierre.component';

describe('CajachicacierreComponent', () => {
  let component: CajachicacierreComponent;
  let fixture: ComponentFixture<CajachicacierreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajachicacierreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajachicacierreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
