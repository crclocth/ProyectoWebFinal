import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformacion2Component } from './user-informacion2.component';

describe('UserInformacion2Component', () => {
  let component: UserInformacion2Component;
  let fixture: ComponentFixture<UserInformacion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInformacion2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
