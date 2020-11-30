import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInformacion4Component } from './admin-informacion4.component';

describe('AdminInformacion4Component', () => {
  let component: AdminInformacion4Component;
  let fixture: ComponentFixture<AdminInformacion4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInformacion4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInformacion4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
