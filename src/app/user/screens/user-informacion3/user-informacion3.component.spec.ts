import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformacion3Component } from './user-informacion3.component';

describe('UserInformacion3Component', () => {
  let component: UserInformacion3Component;
  let fixture: ComponentFixture<UserInformacion3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInformacion3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformacion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
