import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEncuesta2Component } from './user-encuesta2.component';

describe('UserEncuesta2Component', () => {
  let component: UserEncuesta2Component;
  let fixture: ComponentFixture<UserEncuesta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEncuesta2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEncuesta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
