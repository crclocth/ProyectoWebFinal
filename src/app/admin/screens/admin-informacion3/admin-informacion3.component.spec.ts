import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInformacion3Component } from './admin-informacion3.component';

describe('AdminInformacion3Component', () => {
  let component: AdminInformacion3Component;
  let fixture: ComponentFixture<AdminInformacion3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInformacion3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInformacion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
