import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N2pComponent } from './n2p.component';

describe('N2pComponent', () => {
  let component: N2pComponent;
  let fixture: ComponentFixture<N2pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N2pComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N2pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
