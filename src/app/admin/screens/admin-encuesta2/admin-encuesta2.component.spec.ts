import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEncuesta2Component } from './admin-encuesta2.component';

describe('AdminEncuesta2Component', () => {
  let component: AdminEncuesta2Component;
  let fixture: ComponentFixture<AdminEncuesta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEncuesta2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEncuesta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
