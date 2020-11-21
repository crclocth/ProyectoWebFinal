import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNosotrosComponent } from './user-nosotros.component';

describe('UserNosotrosComponent', () => {
  let component: UserNosotrosComponent;
  let fixture: ComponentFixture<UserNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
