import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEncuesta1Component } from './admin-encuesta1.component';

describe('AdminEncuesta1Component', () => {
  let component: AdminEncuesta1Component;
  let fixture: ComponentFixture<AdminEncuesta1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEncuesta1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEncuesta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
