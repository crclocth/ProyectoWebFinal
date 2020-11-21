import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDescargasComponent } from './admin-descargas.component';

describe('AdminDescargasComponent', () => {
  let component: AdminDescargasComponent;
  let fixture: ComponentFixture<AdminDescargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDescargasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDescargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
