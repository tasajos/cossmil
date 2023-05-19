import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgrcajachicaComponent } from './egrcajachica.component';

describe('EgrcajachicaComponent', () => {
  let component: EgrcajachicaComponent;
  let fixture: ComponentFixture<EgrcajachicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgrcajachicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgrcajachicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
