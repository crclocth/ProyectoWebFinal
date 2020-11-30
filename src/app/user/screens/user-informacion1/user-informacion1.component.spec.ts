import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformacion1Component } from './user-informacion1.component';

describe('UserInformacion1Component', () => {
  let component: UserInformacion1Component;
  let fixture: ComponentFixture<UserInformacion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInformacion1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformacion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
