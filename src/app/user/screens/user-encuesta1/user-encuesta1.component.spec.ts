import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEncuesta1Component } from './user-encuesta1.component';

describe('UserEncuesta1Component', () => {
  let component: UserEncuesta1Component;
  let fixture: ComponentFixture<UserEncuesta1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEncuesta1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEncuesta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
