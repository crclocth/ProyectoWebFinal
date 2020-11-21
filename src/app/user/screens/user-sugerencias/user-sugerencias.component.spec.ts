import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSugerenciasComponent } from './user-sugerencias.component';

describe('UserSugerenciasComponent', () => {
  let component: UserSugerenciasComponent;
  let fixture: ComponentFixture<UserSugerenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSugerenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
