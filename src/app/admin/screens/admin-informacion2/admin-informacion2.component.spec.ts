import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInformacion2Component } from './admin-informacion2.component';

describe('AdminInformacion2Component', () => {
  let component: AdminInformacion2Component;
  let fixture: ComponentFixture<AdminInformacion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInformacion2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInformacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
