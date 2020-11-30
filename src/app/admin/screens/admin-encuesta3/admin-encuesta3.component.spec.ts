import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEncuesta3Component } from './admin-encuesta3.component';

describe('AdminEncuesta3Component', () => {
  let component: AdminEncuesta3Component;
  let fixture: ComponentFixture<AdminEncuesta3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEncuesta3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEncuesta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
