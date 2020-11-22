import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNoticiasComponent } from './user-noticias.component';

describe('UserNoticiasComponent', () => {
  let component: UserNoticiasComponent;
  let fixture: ComponentFixture<UserNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
