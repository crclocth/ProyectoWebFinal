import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEncuestasComponent } from './user-encuestas.component';

describe('UserEncuestasComponent', () => {
  let component: UserEncuestasComponent;
  let fixture: ComponentFixture<UserEncuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEncuestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
