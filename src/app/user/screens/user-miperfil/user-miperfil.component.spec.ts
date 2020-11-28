import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMiperfilComponent } from './user-miperfil.component';

describe('UserMiperfilComponent', () => {
  let component: UserMiperfilComponent;
  let fixture: ComponentFixture<UserMiperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMiperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMiperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
