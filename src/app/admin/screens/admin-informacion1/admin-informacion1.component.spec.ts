import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInformacion1Component } from './admin-informacion1.component';

describe('AdminInformacion1Component', () => {
  let component: AdminInformacion1Component;
  let fixture: ComponentFixture<AdminInformacion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInformacion1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInformacion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
