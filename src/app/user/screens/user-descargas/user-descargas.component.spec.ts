import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDescargasComponent } from './user-descargas.component';

describe('UserDescargasComponent', () => {
  let component: UserDescargasComponent;
  let fixture: ComponentFixture<UserDescargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDescargasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDescargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
