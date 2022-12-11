import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantExo3Component } from './enfant-exo3.component';

describe('EnfantExo3Component', () => {
  let component: EnfantExo3Component;
  let fixture: ComponentFixture<EnfantExo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantExo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfantExo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
