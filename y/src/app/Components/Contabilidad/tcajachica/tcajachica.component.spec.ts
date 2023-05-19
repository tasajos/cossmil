import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcajachicaComponent } from './tcajachica.component';

describe('TcajachicaComponent', () => {
  let component: TcajachicaComponent;
  let fixture: ComponentFixture<TcajachicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcajachicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcajachicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
