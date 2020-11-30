import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informacion4Component } from './informacion4.component';

describe('Informacion4Component', () => {
  let component: Informacion4Component;
  let fixture: ComponentFixture<Informacion4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Informacion4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Informacion4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
