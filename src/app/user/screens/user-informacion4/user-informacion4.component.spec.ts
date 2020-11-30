import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformacion4Component } from './user-informacion4.component';

describe('UserInformacion4Component', () => {
  let component: UserInformacion4Component;
  let fixture: ComponentFixture<UserInformacion4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInformacion4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformacion4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
