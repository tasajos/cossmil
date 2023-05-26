import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiacontabiliadComponent } from './guiacontabiliad.component';

describe('GuiacontabiliadComponent', () => {
  let component: GuiacontabiliadComponent;
  let fixture: ComponentFixture<GuiacontabiliadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiacontabiliadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiacontabiliadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
