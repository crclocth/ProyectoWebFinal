import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informacion3Component } from './informacion3.component';

describe('Informacion3Component', () => {
  let component: Informacion3Component;
  let fixture: ComponentFixture<Informacion3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Informacion3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Informacion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
