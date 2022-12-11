import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantExo2Component } from './enfant-exo2.component';

describe('EnfantExo2Component', () => {
  let component: EnfantExo2Component;
  let fixture: ComponentFixture<EnfantExo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantExo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfantExo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
