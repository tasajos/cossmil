import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailVComponent } from './mail-v.component';

describe('MailVComponent', () => {
  let component: MailVComponent;
  let fixture: ComponentFixture<MailVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
