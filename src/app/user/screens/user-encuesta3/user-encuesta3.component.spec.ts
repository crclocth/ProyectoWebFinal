import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEncuesta3Component } from './user-encuesta3.component';

describe('UserEncuesta3Component', () => {
  let component: UserEncuesta3Component;
  let fixture: ComponentFixture<UserEncuesta3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEncuesta3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEncuesta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
